import { useEffect, useRef } from "react";

type GameState = "idle" | "running" | "dead";

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface State {
  gameState: GameState;
  dinoY: number;
  dinoVY: number;
  onGround: boolean;
  legFrame: number;
  legTimer: number;
  obstacles: Obstacle[];
  spawnTimer: number;
  spawnInterval: number;
  speed: number;
  score: number;
  raf: number;
}

const CANVAS_W = 420;
const CANVAS_H = 145;
const GROUND_Y = 115;
const DINO_X = 52;
const DINO_W = 22;
const DINO_H = 26;
const GRAVITY = 0.58;
const JUMP_VY = -13;
const BASE_SPEED = 4.2;
const SPEED_INCREMENT = 0.4;
const SCORE_PER_INCREMENT = 150;
const DINO_COLOR = "hsl(42,88%,62%)";
const OBSTACLE_COLOR = "hsl(220,60%,70%)";
const OBSTACLE_ACCENT = "hsl(220,60%,50%)";
const INSET = 4;

function makeState(): State {
  return {
    gameState: "idle",
    dinoY: GROUND_Y - DINO_H,
    dinoVY: 0,
    onGround: true,
    legFrame: 0,
    legTimer: 0,
    obstacles: [],
    spawnTimer: 0,
    spawnInterval: randomSpawnInterval(),
    speed: BASE_SPEED,
    score: 0,
    raf: 0,
  };
}

function randomSpawnInterval(): number {
  return 60 + Math.floor(Math.random() * 51); // 60–110
}

function spawnObstacle(): Obstacle {
  const h = 22 + Math.floor(Math.random() * 15); // 22–36
  const w = 12 + Math.floor(Math.random() * 9);  // 12–20
  return { x: CANVAS_W, y: GROUND_Y - h, w, h };
}

function drawGround(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, GROUND_Y);
  ctx.lineTo(CANVAS_W, GROUND_Y);
  ctx.stroke();
}

function drawDino(
  ctx: CanvasRenderingContext2D,
  dinoY: number,
  legFrame: number,
  onGround: boolean,
  dead: boolean
) {
  const x = DINO_X;
  const y = dinoY;

  // Body
  ctx.fillStyle = DINO_COLOR;
  ctx.fillRect(x, y, DINO_W, DINO_H);

  // Eye
  if (!dead) {
    ctx.fillStyle = "rgba(10,20,40,0.9)";
    ctx.fillRect(x + DINO_W - 6, y + 3, 4, 4);
  } else {
    // X eyes
    ctx.strokeStyle = "rgba(10,20,40,0.9)";
    ctx.lineWidth = 1.5;
    const ex = x + DINO_W - 6;
    const ey = y + 3;
    ctx.beginPath();
    ctx.moveTo(ex, ey);
    ctx.lineTo(ex + 3, ey + 3);
    ctx.moveTo(ex + 3, ey);
    ctx.lineTo(ex, ey + 3);
    ctx.stroke();
  }

  // Legs (only when on ground)
  if (onGround) {
    ctx.fillStyle = DINO_COLOR;
    const legW = 5;
    const legH = 5;
    const legBaseY = y + DINO_H;
    // Left leg
    const leftOffset = legFrame === 0 ? 2 : 0;
    ctx.fillRect(x + 3, legBaseY + leftOffset, legW, legH);
    // Right leg
    const rightOffset = legFrame === 1 ? 2 : 0;
    ctx.fillRect(x + DINO_W - legW - 3, legBaseY + rightOffset, legW, legH);
  }
}

function drawObstacle(ctx: CanvasRenderingContext2D, obs: Obstacle) {
  ctx.fillStyle = OBSTACLE_COLOR;
  ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
  // Accent stripe (2px, slightly inset)
  ctx.fillStyle = OBSTACLE_ACCENT;
  ctx.fillRect(obs.x + Math.floor(obs.w / 2) - 1, obs.y, 2, obs.h);
}

function checkCollision(dinoY: number, obs: Obstacle): boolean {
  const dx1 = DINO_X + INSET;
  const dy1 = dinoY + INSET;
  const dx2 = DINO_X + DINO_W - INSET;
  const dy2 = dinoY + DINO_H - INSET;

  const ox1 = obs.x + INSET;
  const oy1 = obs.y + INSET;
  const ox2 = obs.x + obs.w - INSET;
  const oy2 = obs.y + obs.h - INSET;

  return dx1 < ox2 && dx2 > ox1 && dy1 < oy2 && dy2 > oy1;
}

export default function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(makeState());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = stateRef.current;

    function drawIdle() {
      if (!ctx) return;
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      drawGround(ctx);
      drawDino(ctx, GROUND_Y - DINO_H, 0, true, false);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = "12px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillText("click · space to play", CANVAS_W / 2, CANVAS_H / 2 - 4);
    }

    function drawDead(score: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      drawGround(ctx);
      // Draw remaining obstacles
      for (const obs of s.obstacles) drawObstacle(ctx, obs);
      drawDino(ctx, s.dinoY, 0, false, true);

      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      ctx.font = "bold 15px Syne, sans-serif";
      ctx.fillText("game over", CANVAS_W / 2, CANVAS_H / 2 - 6);

      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.fillText(
        `score: ${Math.floor(score)} · retry`,
        CANVAS_W / 2,
        CANVAS_H / 2 + 12
      );
    }

    function loop() {
      if (!ctx) return;
      const st = stateRef.current;
      if (st.gameState !== "running") return;

      // Physics
      st.dinoVY += GRAVITY;
      st.dinoY += st.dinoVY;
      const groundPos = GROUND_Y - DINO_H;
      if (st.dinoY >= groundPos) {
        st.dinoY = groundPos;
        st.dinoVY = 0;
        st.onGround = true;
      } else {
        st.onGround = false;
      }

      // Leg animation
      if (st.onGround) {
        st.legTimer++;
        if (st.legTimer >= 6) {
          st.legTimer = 0;
          st.legFrame = st.legFrame === 0 ? 1 : 0;
        }
      }

      // Score & speed
      st.score += st.speed * 0.05;
      const level = Math.floor(st.score / SCORE_PER_INCREMENT);
      st.speed = BASE_SPEED + level * SPEED_INCREMENT;

      // Obstacle spawn
      st.spawnTimer++;
      if (st.spawnTimer >= st.spawnInterval) {
        st.spawnTimer = 0;
        st.spawnInterval = randomSpawnInterval();
        st.obstacles.push(spawnObstacle());
      }

      // Move & cull obstacles
      st.obstacles = st.obstacles
        .map((o) => ({ ...o, x: o.x - st.speed }))
        .filter((o) => o.x + o.w > -10);

      // Collision
      for (const obs of st.obstacles) {
        if (checkCollision(st.dinoY, obs)) {
          st.gameState = "dead";
          drawDead(st.score);
          return;
        }
      }

      // Draw
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      drawGround(ctx);
      for (const obs of st.obstacles) drawObstacle(ctx, obs);
      drawDino(ctx, st.dinoY, st.legFrame, st.onGround, false);

      // Score display
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      ctx.font = "11px 'JetBrains Mono', monospace";
      ctx.textAlign = "right";
      ctx.fillText(String(Math.floor(st.score)), CANVAS_W - 10, 18);

      st.raf = requestAnimationFrame(loop);
    }

    function startGame() {
      const st = stateRef.current;
      // Reset
      st.dinoY = GROUND_Y - DINO_H;
      st.dinoVY = 0;
      st.onGround = true;
      st.legFrame = 0;
      st.legTimer = 0;
      st.obstacles = [];
      st.spawnTimer = 0;
      st.spawnInterval = randomSpawnInterval();
      st.speed = BASE_SPEED;
      st.score = 0;
      st.gameState = "running";
      if (st.raf) cancelAnimationFrame(st.raf);
      st.raf = requestAnimationFrame(loop);
    }

    function jump() {
      const st = stateRef.current;
      if (st.gameState === "idle" || st.gameState === "dead") {
        startGame();
        return;
      }
      if (st.gameState === "running" && st.onGround) {
        st.dinoVY = JUMP_VY;
        st.onGround = false;
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    }

    // Attach click via the canvas ref (separate from the onClick prop fallback)
    canvas.addEventListener("click", jump);
    window.addEventListener("keydown", handleKey);

    // Initial idle draw
    drawIdle();

    return () => {
      canvas.removeEventListener("click", jump);
      window.removeEventListener("keydown", handleKey);
      if (stateRef.current.raf) cancelAnimationFrame(stateRef.current.raf);
    };
  }, []);

  const canvas = (
    <canvas
      ref={canvasRef}
      width={420}
      height={145}
      className="rounded-lg select-none"
      style={{
        display: "block",
        background: "transparent",
        imageRendering: "pixelated",
      }}
    />
  );

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <p className="text-primary-foreground/35 text-xs font-mono tracking-widest">
        [ mini game ]
      </p>
      {canvas}
      <p className="text-primary-foreground/25 text-xs font-mono">
        space or click to jump
      </p>
    </div>
  );
}
