import React, { useEffect, useRef } from "react";
import { LampColor, PARTICLE_THEMES } from "../utils/lampTheme";

interface LampAmbientBackgroundProps {
  color: LampColor;
  active?: boolean;
}

export const LampAmbientBackground: React.FC<LampAmbientBackgroundProps> = ({
  color,
  active = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const colorRef = useRef<LampColor>(color);
  const activeRef = useRef<boolean>(active);

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let rafId = 0;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      pulseSpeed: number;
      pulse: number;
    }

    const createParticle = (w: number, h: number): Particle => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.4) * 0.35,
      vy: -Math.random() * 0.4 - 0.15,
      alpha: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
      pulse: Math.random() * Math.PI
    });

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particles: Particle[] = Array.from({ length: 60 }, () =>
      createParticle(width || window.innerWidth, height || window.innerHeight)
    );

    const renderParticles = () => {
      ctx.clearRect(0, 0, width, height);
      const theme = PARTICLE_THEMES[colorRef.current] || PARTICLE_THEMES.amber;
      const isActive = activeRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = (Math.sin(p.pulse) * 0.3 + 0.7) * p.alpha;
        const factor = isActive ? 0.92 : 0.08;
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${theme.fill}, ${currentAlpha * factor})`;
        if (isActive) {
          ctx.shadowBlur = 7;
          ctx.shadowColor = `rgba(${theme.glow}, 0.5)`;
        }
        ctx.fill();
        ctx.restore();
      }
      rafId = requestAnimationFrame(renderParticles);
    };

    renderParticles();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <div className="inner-ambient-glow" aria-hidden="true" />
      <canvas ref={canvasRef} className="inner-dust-canvas" aria-hidden="true" />
    </>
  );
};

export default LampAmbientBackground;
