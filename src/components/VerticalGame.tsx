import { useEffect, useRef } from "react";

const CW = 260;
const CH = 400;
const PLAYER_SCREEN_Y = 68;
const PW = 20;
const PH = 20;
const FH = 15;
const GAP = 80;
const BASE_SPEED = 1.5;
const PLAYER_SPEED = 3.0;

interface Floor {
  y: number;
  gapX: number;
  passed: boolean;
}

interface State {
  gameState: "running" | "dead";
  playerMode: boolean;
  controlMsg: number;
  px: number;
  floors: Floor[];
  nextDist: number;
  score: number;
  speed: number;
  frame: number;
  keys: Set<string>;
}

const makeFloors = (): Floor[] => {
  const floors: Floor[] = [];
  const margin = 24;
  for (let i = 0; i < 6; i++) {
    const gapX = margin + Math.random() * (CW - GAP - margin * 2);
    floors.push({ y: CH - 30 - i * 72, gapX, passed: false });
  }
  return floors;
};

const initState = (): State => ({
  gameState: "running",
  playerMode: false,
  controlMsg: 0,
  px: CW / 2 - PW / 2,
  floors: makeFloors(),
  nextDist: 72,
  score: 0,
  speed: BASE_SPEED,
  frame: 0,
  keys: new Set(),
});

const VerticalGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stRef = useRef<State>(initState());
  const raf = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const restart = () => {
      const s = initState();
      Object.assign(stRef.current, s);
    };

    const update = () => {
      const s = stRef.current;
      if (s.gameState !== "running") return;

      s.frame++;
      s.score += s.speed * 0.015;
      s.speed = BASE_SPEED + Math.floor(s.score / 80) * 0.16;

      // horizontal movement
      if (s.playerMode) {
        if (s.keys.has("ArrowLeft") || s.keys.has("KeyA")) s.px -= PLAYER_SPEED;
        if (s.keys.has("ArrowRight") || s.keys.has("KeyD")) s.px += PLAYER_SPEED;
      } else {
        // auto-play: steer toward the next floor's gap
        const next = [...s.floors]
          .filter((f) => !f.passed && f.y > PLAYER_SCREEN_Y + PH)
          .sort((a, b) => a.y - b.y)[0];
        const target = next
          ? next.gapX + GAP / 2 - PW / 2 + Math.sin(s.frame * 0.035) * 10
          : CW / 2 - PW / 2;
        s.px += (target - s.px) * 0.05;
      }
      s.px = Math.max(2, Math.min(CW - PW - 2, s.px));

      // scroll floors up
      for (const f of s.floors) f.y -= s.speed;
      s.floors = s.floors.filter((f) => f.y > -FH - 4);

      // spawn new floor from bottom
      s.nextDist -= s.speed;
      if (s.nextDist <= 0) {
        const margin = 24;
        const gapX = margin + Math.random() * (CW - GAP - margin * 2);
        s.floors.push({ y: CH + FH + 4, gapX, passed: false });
        s.nextDist = 62 + Math.random() * 30;
      }

      // collision check
      for (const f of s.floors) {
        if (f.passed) continue;
        const floorTop = f.y;
        const floorBot = f.y + FH;
        const pBottom = PLAYER_SCREEN_Y + PH;

        if (floorTop <= pBottom + 2 && floorBot >= PLAYER_SCREEN_Y) {
          const inGap = s.px + PW - 3 > f.gapX && s.px + 3 < f.gapX + GAP;
          if (!inGap) {
            s.gameState = "dead";
            return;
          }
        }

        if (!f.passed && f.y + FH < PLAYER_SCREEN_Y - 4) {
          f.passed = true;
        }
      }

      if (s.controlMsg > 0) s.controlMsg--;
    };

    const draw = () => {
      const s = stRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // subtle shaft lines
      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      ctx.lineWidth = 1;
      for (let x = 32; x < CW; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, CH);
        ctx.stroke();
      }

      // floors
      for (const f of s.floors) {
        const rightX = f.gapX + GAP;
        const rightW = CW - rightX;

        // left block
        if (f.gapX > 0) {
          ctx.fillStyle = "hsl(220,58%,40%)";
          ctx.fillRect(0, f.y, f.gapX, FH);
          ctx.fillStyle = "rgba(255,255,255,0.13)";
          ctx.fillRect(0, f.y, f.gapX, 2);
          ctx.fillStyle = "hsl(220,58%,28%)";
          ctx.fillRect(0, f.y + FH - 2, f.gapX, 2);
        }
        // right block
        if (rightW > 0) {
          ctx.fillStyle = "hsl(220,58%,40%)";
          ctx.fillRect(rightX, f.y, rightW, FH);
          ctx.fillStyle = "rgba(255,255,255,0.13)";
          ctx.fillRect(rightX, f.y, rightW, 2);
          ctx.fillStyle = "hsl(220,58%,28%)";
          ctx.fillRect(rightX, f.y + FH - 2, rightW, 2);
        }
        // gap hint glow
        ctx.fillStyle = "rgba(255,210,80,0.05)";
        ctx.fillRect(f.gapX, f.y, GAP, FH);
      }

      // player
      const dead = s.gameState === "dead";
      if (!dead) {
        // thruster flicker below player
        const flicker = 4 + Math.random() * 5;
        ctx.fillStyle = `rgba(255,180,40,${0.25 + Math.random() * 0.2})`;
        ctx.fillRect(s.px + 4, PLAYER_SCREEN_Y + PH, 4, flicker);
        ctx.fillRect(s.px + PW - 8, PLAYER_SCREEN_Y + PH, 4, flicker - 2);

        // body
        ctx.fillStyle = "hsl(42,88%,62%)";
        ctx.fillRect(s.px, PLAYER_SCREEN_Y, PW, PH);
        // eye
        ctx.fillStyle = "hsl(220,85%,18%)";
        ctx.fillRect(s.px + PW - 6, PLAYER_SCREEN_Y + 5, 4, 4);
        // nose
        ctx.fillStyle = "hsl(220,85%,18%)";
        ctx.fillRect(s.px + PW - 2, PLAYER_SCREEN_Y + 9, 2, 2);
      } else {
        // death flash
        ctx.fillStyle = "rgba(239,68,68,0.35)";
        ctx.fillRect(s.px - 5, PLAYER_SCREEN_Y - 5, PW + 10, PH + 10);
        ctx.fillStyle = "hsl(0,80%,60%)";
        ctx.fillRect(s.px, PLAYER_SCREEN_Y, PW, PH);
        // x eyes
        ctx.fillStyle = "hsl(220,85%,18%)";
        ctx.fillRect(s.px + 3, PLAYER_SCREEN_Y + 4, 4, 2);
        ctx.fillRect(s.px + 5, PLAYER_SCREEN_Y + 6, 4, 2);
        ctx.fillRect(s.px + 3, PLAYER_SCREEN_Y + 8, 4, 2);
        ctx.fillRect(s.px + 5, PLAYER_SCREEN_Y + 4, 4, 2);
      }

      // score
      ctx.fillStyle = "rgba(255,255,255,0.38)";
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = "right";
      ctx.fillText(Math.floor(s.score).toString(), CW - 8, 18);
      ctx.textAlign = "left";

      // auto label
      if (!s.playerMode && s.gameState === "running") {
        ctx.fillStyle = "rgba(255,255,255,0.18)";
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = "center";
        ctx.fillText("auto · ← → to take over", CW / 2, CH - 10);
        ctx.textAlign = "left";
      }

      // "you have control" flash
      if (s.controlMsg > 0) {
        const a = Math.min(1, s.controlMsg / 40) * 0.9;
        ctx.fillStyle = `rgba(52,211,153,${a})`;
        ctx.font = 'bold 12px "Syne", sans-serif';
        ctx.textAlign = "center";
        ctx.fillText("you have control →", CW / 2, PLAYER_SCREEN_Y - 12);
        ctx.textAlign = "left";
      }

      // dead overlay
      if (dead) {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0, 0, CW, CH);
        ctx.fillStyle = "rgba(255,255,255,0.88)";
        ctx.font = 'bold 15px "Syne", sans-serif';
        ctx.textAlign = "center";
        ctx.fillText("you hit a wall", CW / 2, CH / 2 - 14);
        ctx.fillStyle = "rgba(255,255,255,0.48)";
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillText(`score: ${Math.floor(s.score)}  ·  click to retry`, CW / 2, CH / 2 + 8);
        ctx.textAlign = "left";
      }
    };

    const loop = () => {
      update();
      draw();
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onKeyDown = (e: KeyboardEvent) => {
      const s = stRef.current;
      if (["ArrowLeft", "ArrowRight", "KeyA", "KeyD"].includes(e.code)) {
        e.preventDefault();
        s.keys.add(e.code);
        if (!s.playerMode && s.gameState === "running") {
          s.playerMode = true;
          s.controlMsg = 100;
        }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => stRef.current.keys.delete(e.code);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const handleClick = () => {
    if (stRef.current.gameState === "dead") {
      const s = initState();
      Object.assign(stRef.current, s);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <p className="text-primary-foreground/30 text-xs font-mono tracking-widest">
        [ floor runner ]
      </p>
      <canvas
        ref={canvasRef}
        width={CW}
        height={CH}
        onClick={handleClick}
        className="rounded-lg select-none w-full max-w-[260px]"
        style={{ display: "block", background: "transparent", imageRendering: "pixelated" }}
      />
      <p className="text-primary-foreground/18 text-xs font-mono">← → or A D to take control</p>
    </div>
  );
};

export default VerticalGame;
