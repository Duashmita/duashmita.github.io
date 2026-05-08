import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef<number>();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [role='button'], label, [data-cursor-hover]"));
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver);

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.09;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.09;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  const ringSize = hovering ? 44 : 30;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 6, height: 6,
          marginLeft: -3, marginTop: -3,
          borderRadius: "50%",
          backgroundColor: "#fff",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.15s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          borderRadius: "50%",
          backgroundImage: `
            linear-gradient(rgba(148,190,255,0.28) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,190,255,0.28) 1px, transparent 1px)
          `,
          backgroundSize: "8px 8px",
          backgroundColor: "rgba(20, 50, 140, 0.06)",
          border: hovering
            ? "1px solid rgba(148,190,255,0.65)"
            : "1px solid rgba(148,190,255,0.35)",
          boxShadow: hovering
            ? "0 0 12px rgba(100,150,255,0.25), inset 0 0 6px rgba(100,150,255,0.08)"
            : "0 0 6px rgba(100,150,255,0.1)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition:
            "opacity 0.15s, width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), margin 0.25s cubic-bezier(0.34,1.56,0.64,1), border 0.2s, box-shadow 0.2s",
        }}
      />
    </>
  );
};

export default CursorGlow;
