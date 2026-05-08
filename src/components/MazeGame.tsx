import { useEffect, useRef } from 'react';

const CELL = 30;
const COLS = 40;
const ROWS = 23;
const CW = 1200;
const CH = 700;
const EXIT_ROW = 22;
const EXIT_COL = 28;
const BLOCKED_COLS = 17;
const PLAYER_INTERVAL = 22;
const AUTO_SPEED = 0.035;

// difficulty per level
const botInterval  = (lvl: number) => Math.max(38,  90 - lvl * 12);
const lightRadius  = (lvl: number) => Math.max(120, 200 - lvl * 16);

// intro: pause game for 4 seconds, show entity labels
const I_END  = 4 * 60;  // 4-second freeze
const I_FADE = 20;       // fade in/out duration (frames)

type Dir = 'top' | 'right' | 'bottom' | 'left';

interface MazeCell {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
}

interface GS {
  maze: MazeCell[][];
  lightX: number;
  lightY: number;
  autoPath: number[][];
  autoStep: number;
  autoProgress: number;
  botR: number;
  botC: number;
  botPx: number;
  botPy: number;
  botTimer: number;
  botInt: number;
  playerR: number;
  playerC: number;
  playerPx: number;
  playerPy: number;
  playerTimer: number;
  lightR: number;
  mode: 'auto' | 'player';
  status: 'running' | 'win' | 'dead';
  endTimer: number;
  controlMsg: number;
  frame: number;
  level: number;
  introTimer: number;
  introActive: boolean;
}

function generateMaze(): MazeCell[][] {
  const maze: MazeCell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      top: true,
      right: true,
      bottom: true,
      left: true,
    }))
  );

  const visited: boolean[][] = Array.from({ length: ROWS }, () =>
    new Array(COLS).fill(false)
  );

  const dirs: Dir[] = ['top', 'right', 'bottom', 'left'];
  const dr: Record<Dir, number> = { top: -1, right: 0, bottom: 1, left: 0 };
  const dc: Record<Dir, number> = { top: 0, right: 1, bottom: 0, left: -1 };
  const opposite: Record<Dir, Dir> = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  };

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function carve(r: number, c: number) {
    visited[r][c] = true;
    const shuffled = shuffle(dirs);
    for (const d of shuffled) {
      const nr = r + dr[d];
      const nc = c + dc[d];
      // only carve inside the playable area (columns BLOCKED_COLS+)
      if (nr >= 0 && nr < ROWS && nc >= BLOCKED_COLS && nc < COLS && !visited[nr][nc]) {
        maze[r][c][d] = false;
        maze[nr][nc][opposite[d]] = false;
        carve(nr, nc);
      }
    }
  }

  // start carving from the first playable column — guarantees full connectivity there
  carve(0, BLOCKED_COLS);

  // Remove bottom wall of exit cell so there's a visible opening
  maze[EXIT_ROW][EXIT_COL].bottom = false;

  return maze;
}

function bfs(
  maze: MazeCell[][],
  sr: number,
  sc: number,
  er: number,
  ec: number,
  blocked?: (r: number, c: number) => boolean
): number[][] {
  const visited: boolean[][] = Array.from({ length: ROWS }, () =>
    new Array(COLS).fill(false)
  );
  const prev: (number[] | null)[][] = Array.from({ length: ROWS }, () =>
    new Array(COLS).fill(null)
  );
  const queue: number[][] = [[sr, sc]];
  visited[sr][sc] = true;

  const dirs: Array<[Dir, number, number]> = [
    ['top', -1, 0],
    ['right', 0, 1],
    ['bottom', 1, 0],
    ['left', 0, -1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    if (r === er && c === ec) break;
    for (const [d, dr, dc] of dirs) {
      if (!maze[r][c][d]) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !visited[nr][nc] && !(blocked?.(nr, nc))) {
          visited[nr][nc] = true;
          prev[nr][nc] = [r, c];
          queue.push([nr, nc]);
        }
      }
    }
  }

  if (!visited[er][ec]) return [[sr, sc]];

  const path: number[][] = [];
  let cur: number[] | null = [er, ec];
  while (cur) {
    path.unshift(cur);
    cur = prev[cur[0]][cur[1]];
  }
  return path;
}

function cellCenter(r: number, c: number): { x: number; y: number } {
  return { x: c * CELL + CELL / 2, y: r * CELL + CELL / 2 };
}

function initState(level = 0): GS {
  const maze = generateMaze();
  const startCenter = cellCenter(0, BLOCKED_COLS);
  const autoPath = bfs(maze, 0, BLOCKED_COLS, EXIT_ROW, EXIT_COL);
  const botStart = cellCenter(0, COLS - 1);
  const playerStart = cellCenter(0, BLOCKED_COLS);
  return {
    maze,
    lightX: startCenter.x,
    lightY: startCenter.y,
    autoPath,
    autoStep: 0,
    autoProgress: 0,
    botR: 0,
    botC: COLS - 1,
    botPx: botStart.x,
    botPy: botStart.y,
    botTimer: 0,
    botInt: botInterval(level),
    playerR: 0,
    playerC: BLOCKED_COLS,
    playerPx: playerStart.x,
    playerPy: playerStart.y,
    playerTimer: 0,
    lightR: lightRadius(level),
    mode: 'auto',
    status: 'running',
    endTimer: 0,
    controlMsg: 0,
    frame: 0,
    level,
    introTimer: 0,
    introActive: level === 0, // only show full intro on first level
  };
}

export default function MazeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(initState());
  const mousePos = useRef<{ x: number; y: number }>({ x: CW / 2, y: CH / 2 });
  const darkCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create offscreen dark canvas once
    const darkCanvas = document.createElement('canvas');
    darkCanvas.width = CW;
    darkCanvas.height = CH;
    darkCanvasRef.current = darkCanvas;

    function update() {
      const gs = gsRef.current;

      // If not running: countdown then reset
      if (gs.status !== 'running') {
        gs.endTimer++;
        if (gs.endTimer >= 130) {
          gsRef.current = gs.status === 'win'
            ? initState(gs.level + 1)   // harder next level
            : initState(gs.level);      // retry same level
        }
        return;
      }

      // 4-second intro pause — freeze everything, just tick the timer
      if (gs.introActive) {
        gs.introTimer++;
        if (gs.introTimer >= I_END) gs.introActive = false;
        return;
      }

      gs.frame++;

      // Light movement
      if (gs.mode === 'auto') {
        gs.autoProgress += AUTO_SPEED;
        if (gs.autoProgress >= 1) {
          gs.autoStep++;
          gs.autoProgress = 0;
        }
        if (gs.autoStep >= gs.autoPath.length - 1) {
          gs.status = 'win';
          gs.endTimer = 0;
          return;
        }
        const cur = gs.autoPath[Math.min(gs.autoStep, gs.autoPath.length - 1)];
        const next = gs.autoPath[Math.min(gs.autoStep + 1, gs.autoPath.length - 1)];
        const curCenter = cellCenter(cur[0], cur[1]);
        const nextCenter = cellCenter(next[0], next[1]);
        gs.lightX = curCenter.x + (nextCenter.x - curCenter.x) * gs.autoProgress;
        gs.lightY = curCenter.y + (nextCenter.y - curCenter.y) * gs.autoProgress;
      } else {
        // player mode
        const mp = mousePos.current;
        gs.lightX = Math.max(0, Math.min(CW, mp.x));
        gs.lightY = Math.max(0, Math.min(CH, mp.y));
      }

      // Bot movement (frozen during intro)
      gs.botTimer++;
      if (!gs.introActive && gs.botTimer >= gs.botInt) {
        gs.botTimer = 0;
        const targetR = Math.max(0, Math.min(ROWS - 1, Math.floor(gs.lightY / CELL)));
        const targetC = Math.max(0, Math.min(COLS - 1, Math.floor(gs.lightX / CELL)));
        const path = bfs(gs.maze, gs.botR, gs.botC, targetR, targetC);
        if (path.length > 1) {
          gs.botR = path[1][0];
          gs.botC = path[1][1];
          const c = cellCenter(gs.botR, gs.botC);
          gs.botPx = c.x;
          gs.botPy = c.y;
        }
      }

      // Player character follows the light through the maze
      gs.playerTimer++;
      if (gs.playerTimer >= PLAYER_INTERVAL) {
        gs.playerTimer = 0;
        const tR = Math.max(0, Math.min(ROWS - 1, Math.floor(gs.lightY / CELL)));
        const tC = Math.max(BLOCKED_COLS, Math.min(COLS - 1, Math.floor(gs.lightX / CELL)));
        const pPath = bfs(gs.maze, gs.playerR, gs.playerC, tR, tC, (_r, c) => c < BLOCKED_COLS);
        if (pPath.length > 1) {
          gs.playerR = pPath[1][0];
          gs.playerC = pPath[1][1];
          const pc = cellCenter(gs.playerR, gs.playerC);
          gs.playerPx = pc.x;
          gs.playerPy = pc.y;
        }
      }

      // Win: player reaches the exit
      if (gs.playerR === EXIT_ROW && gs.playerC === EXIT_COL) {
        gs.status = 'win';
        gs.endTimer = 0;
        return;
      }

      // Dead: bot catches the player
      const dx = gs.botPx - gs.playerPx;
      const dy = gs.botPy - gs.playerPy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CELL * 0.9) {
        gs.status = 'dead';
        gs.endTimer = 0;
        return;
      }

      // Decrement controlMsg
      if (gs.controlMsg > 0) gs.controlMsg--;
    }

    function draw() {
      if (!ctx) return;
      const gs = gsRef.current;
      const darkCanvas = darkCanvasRef.current;

      // 1. Background
      ctx.fillStyle = '#060b18';
      ctx.fillRect(0, 0, CW, CH);

      // 2. Floor tiles — alternating colors, 1px gap
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          ctx.fillStyle = (r + c) % 2 === 0 ? '#090f1e' : '#07101b';
          ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 1, CELL - 1);
        }
      }

      // 3. Walls — single path
      ctx.beginPath();
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const cell = gs.maze[r][c];
          const x = c * CELL;
          const y = r * CELL;
          if (cell.top) {
            ctx.moveTo(x, y);
            ctx.lineTo(x + CELL, y);
          }
          if (cell.left) {
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + CELL);
          }
          // Right wall for last column
          if (c === COLS - 1 && cell.right) {
            ctx.moveTo(x + CELL, y);
            ctx.lineTo(x + CELL, y + CELL);
          }
          // Bottom wall for last row
          if (r === ROWS - 1 && cell.bottom) {
            ctx.moveTo(x, y + CELL);
            ctx.lineTo(x + CELL, y + CELL);
          }
        }
      }
      ctx.strokeStyle = '#1d3060';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3.5 Blocked zone — text-overlay area the player can't enter
      {
        const bw = BLOCKED_COLS * CELL;
        // dark fill over the sealed columns
        ctx.fillStyle = 'rgba(4,8,20,0.62)';
        ctx.fillRect(0, 0, bw, CH);
        // dashed boundary line on the right edge
        ctx.save();
        ctx.strokeStyle = 'rgba(90,130,220,0.45)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 5]);
        ctx.beginPath();
        ctx.moveTo(bw, 0);
        ctx.lineTo(bw, CH);
        ctx.stroke();
        ctx.restore();
        // subtle full-rectangle border inset
        ctx.strokeStyle = 'rgba(70,110,200,0.18)';
        ctx.lineWidth = 1;
        ctx.strokeRect(1, 1, bw - 2, CH - 2);
      }

      // 4. Exit glow (before darkness)
      const exitCenter = cellCenter(EXIT_ROW, EXIT_COL);
      const exitGrad = ctx.createRadialGradient(
        exitCenter.x, exitCenter.y, 0,
        exitCenter.x, exitCenter.y, CELL * 1.5
      );
      exitGrad.addColorStop(0, 'rgba(52,211,153,0.4)');
      exitGrad.addColorStop(0.5, 'rgba(52,211,153,0.15)');
      exitGrad.addColorStop(1, 'rgba(52,211,153,0)');
      ctx.fillStyle = exitGrad;
      ctx.beginPath();
      ctx.arc(exitCenter.x, exitCenter.y, CELL * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(52,211,153,0.7)';
      ctx.beginPath();
      ctx.arc(exitCenter.x, exitCenter.y, 5, 0, Math.PI * 2);
      ctx.fill();

      // 5. Bot body (before darkness — dimmed by dark layer)
      const botGlow = ctx.createRadialGradient(
        gs.botPx, gs.botPy, 0,
        gs.botPx, gs.botPy, 12
      );
      botGlow.addColorStop(0, 'rgba(180,0,0,0.5)');
      botGlow.addColorStop(1, 'rgba(180,0,0,0)');
      ctx.fillStyle = botGlow;
      ctx.beginPath();
      ctx.arc(gs.botPx, gs.botPy, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#5a0000';
      ctx.fillRect(gs.botPx - 5, gs.botPy - 5, 10, 10);

      // 5.5 Player — yellow blob
      {
        const px = gs.playerPx;
        const py = gs.playerPy;
        // glow
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 18);
        pg.addColorStop(0, 'rgba(255,210,40,0.4)');
        pg.addColorStop(1, 'rgba(255,210,40,0)');
        ctx.fillStyle = pg;
        ctx.fillRect(px - 18, py - 18, 36, 36);
        // blob
        ctx.fillStyle = 'hsl(44,95%,58%)';
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Torch warm overlay
      const torchOverlay = ctx.createRadialGradient(
        gs.lightX, gs.lightY, 0,
        gs.lightX, gs.lightY, gs.lightR
      );
      torchOverlay.addColorStop(0, 'rgba(255,200,80,0.13)');
      torchOverlay.addColorStop(1, 'rgba(255,200,80,0)');
      ctx.fillStyle = torchOverlay;
      ctx.fillRect(0, 0, CW, CH);

      // 7. Darkness mask using offscreen canvas
      if (darkCanvas) {
        const darkCtx = darkCanvas.getContext('2d');
        if (darkCtx) {
          darkCtx.clearRect(0, 0, CW, CH);
          darkCtx.fillStyle = 'rgb(6,11,24)';
          darkCtx.fillRect(0, 0, CW, CH);
          darkCtx.globalCompositeOperation = 'destination-out';
          const darkGrad = darkCtx.createRadialGradient(
            gs.lightX, gs.lightY, 0,
            gs.lightX, gs.lightY, gs.lightR
          );
          darkGrad.addColorStop(0, 'rgba(0,0,0,1)');
          darkGrad.addColorStop(0.5, 'rgba(0,0,0,0.95)');
          darkGrad.addColorStop(0.82, 'rgba(0,0,0,0.4)');
          darkGrad.addColorStop(1, 'rgba(0,0,0,0)');
          darkCtx.fillStyle = darkGrad;
          darkCtx.fillRect(0, 0, CW, CH);
          darkCtx.globalCompositeOperation = 'source-over';
          ctx.drawImage(darkCanvas, 0, 0);
        }
      }

      // 7.5 Player faint indicator after darkness — a very subtle warm dot so you never fully lose them
      ctx.fillStyle = 'rgba(255,210,40,0.25)';
      ctx.beginPath();
      ctx.arc(gs.playerPx, gs.playerPy, 5, 0, Math.PI * 2);
      ctx.fill();

      // 8. Bot eyes (drawn AFTER darkness — always visible)
      const eyeAlpha = 0.5 + Math.sin(gs.frame * 0.08) * 0.12;
      ctx.fillStyle = `rgba(255,40,40,${eyeAlpha})`;
      ctx.fillRect(gs.botPx - 4, gs.botPy - 3, 3, 3);
      ctx.fillRect(gs.botPx + 1, gs.botPy - 3, 3, 3);

      // 9. HUD (inside canvas)

      // Intro entity labels — drawn here (after darkness) so they're always visible
      if (gs.introActive) {
        const t = gs.introTimer;
        const fadeIn  = Math.min(1, t / I_FADE);
        const fadeOut = t > I_END - I_FADE ? Math.max(0, (I_END - t) / I_FADE) : 1;
        const a = fadeIn * fadeOut;

        ctx.save();
        ctx.font = '11px "JetBrains Mono", monospace';

        const callout = (
          ex: number, ey: number,
          dx: number, dy: number,       // direction of leader line
          label: string,
          color: string,
          align: CanvasTextAlign
        ) => {
          const ex2 = ex + dx;
          const ey2 = ey + dy;
          // leader line
          ctx.globalAlpha = a * 0.55;
          ctx.strokeStyle = color;
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(ex2, ey2); ctx.stroke();
          ctx.setLineDash([]);
          // label
          ctx.globalAlpha = a * 0.95;
          ctx.fillStyle = color;
          ctx.textAlign = align;
          const tx = align === 'right' ? ex2 - 4 : align === 'left' ? ex2 + 4 : ex2;
          ctx.fillText(label, tx, ey2 + (dy < 0 ? -6 : 14));
        };

        // ── yellow blob: label goes right ──
        callout(
          gs.playerPx + 12, gs.playerPy,
          52, 0,
          'follows your light',
          'hsl(44,95%,62%)', 'left'
        );

        // ── green exit portal: label goes up ──
        const ec = cellCenter(EXIT_ROW, EXIT_COL);
        callout(
          ec.x, ec.y - 10,
          0, -44,
          'reach here to escape',
          'hsl(152,58%,60%)', 'center'
        );

        // ── red bot eyes: label goes left (it starts top-right) ──
        callout(
          gs.botPx - 12, gs.botPy,
          -52, 0,
          'avoid this',
          'hsl(0,80%,65%)', 'right'
        );

        ctx.globalAlpha = 1;
        ctx.textAlign = 'left';
        ctx.restore();
      }

      // Level indicator — top-right corner, small
      if (gs.level > 0 || !gs.introActive) {
        ctx.fillStyle = 'rgba(255,255,255,0.22)';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`lvl ${gs.level + 1}`, CW - 10, 18);
        ctx.textAlign = 'left';
      }

      if (gs.controlMsg > 0) {
        const alpha = Math.min(1, gs.controlMsg / 40);
        ctx.fillStyle = `rgba(52,211,153,${alpha})`;
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('you have the light →', CW / 2, 32);
      }

      if (gs.mode === 'auto' && gs.status === 'running') {
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.font = '14px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('hover to take the light', CW / 2, CH - 14);
      }

      if (gs.status === 'win') {
        ctx.fillStyle = 'rgba(6,11,24,0.8)';
        ctx.fillRect(0, CH / 2 - 46, CW, 92);
        ctx.fillStyle = 'rgba(52,211,153,0.92)';
        ctx.font = 'bold 22px "Syne", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('escaped!', CW / 2, CH / 2 - 10);
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillText(`level ${gs.level + 1} cleared · loading harder maze...`, CW / 2, CH / 2 + 14);
      }

      if (gs.status === 'dead') {
        ctx.fillStyle = 'rgba(6,11,24,0.8)';
        ctx.fillRect(0, CH / 2 - 40, CW, 80);
        ctx.fillStyle = 'rgba(255,60,60,0.9)';
        ctx.font = 'bold 20px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('it found you', CW / 2, CH / 2 - 8);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = '11px monospace';
        ctx.fillText('regenerating...', CW / 2, CH / 2 + 16);
      }
    }

    function loop() {
      update();
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    mousePos.current = {
      x: (e.clientX - rect.left) * (CW / rect.width),
      y: (e.clientY - rect.top)  * (CH / rect.height),
    };
  };

  const handleMouseEnter = () => {
    const gs = gsRef.current;
    if (gs.status === 'running') {
      gs.mode = 'player';
      gs.controlMsg = 120;
    }
  };

  const handleMouseLeave = () => {
    const gs = gsRef.current;
    const curR = Math.max(0, Math.min(ROWS - 1, Math.floor(gs.lightY / CELL)));
    const curC = Math.max(0, Math.min(COLS - 1, Math.floor(gs.lightX / CELL)));
    gs.autoPath = bfs(gs.maze, curR, curC, EXIT_ROW, EXIT_COL);
    gs.autoStep = 0;
    gs.autoProgress = 0;
    gs.mode = 'auto';
  };

  return (
    <canvas
      ref={canvasRef}
      width={CW}
      height={CH}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full block select-none"
      style={{ background: '#060b18', cursor: 'none' }}
    />
  );
}
