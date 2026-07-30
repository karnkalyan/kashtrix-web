"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroWaveNetworkProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  baseY: number;
  velocityX: number;
  velocityY: number;
  radius: number;
  color: string;
  phase: number;
  amplitude: number;
}

const LIGHT_COLORS = ["#06B6D4", "#8B5CF6", "#10B981", "#2563EB", "#EC4899"];
const DARK_COLORS = ["#38BDF8", "#C084FC", "#34D399", "#60A5FA", "#F472B6"];

export const HeroWaveNetwork: React.FC<HeroWaveNetworkProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const container = canvas?.parentElement;

    if (!canvas || !context || !container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrame = 0;
    let isDark = document.documentElement.classList.contains("dark");

    const createParticles = () => {
      const colors = isDark ? DARK_COLORS : LIGHT_COLORS;
      const particleCount = Math.max(28, Math.min(72, Math.round(width / 24)));

      particles = Array.from({ length: particleCount }, (_, index) => {
        const y = index % 3 ? height * (0.48 + Math.random() * 0.48) : Math.random() * height;

        return {
          x: Math.random() * width,
          y,
          baseY: y,
          velocityX: (Math.random() - 0.5) * 0.18,
          velocityY: (Math.random() - 0.5) * 0.12,
          radius: Math.random() * 3.8 + 1.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          phase: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 16 + 4,
        };
      });
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const drawWave = (time: number) => {
      context.save();
      context.globalAlpha = isDark ? 0.28 : 0.18;
      context.lineWidth = 0.75;
      const lineCount = width < 700 ? 18 : 28;

      for (let line = 0; line < lineCount; line += 1) {
        context.strokeStyle = line / lineCount > 0.62 ? "#E11D72" : isDark ? "#C4A7E7" : "#76549A";
        context.beginPath();

        for (let x = -40; x <= width + 40; x += 14) {
          const progress = x / Math.max(width, 1);
          const y =
            height * 0.72 +
            Math.sin(progress * Math.PI * 2.3 + time * 0.00018 + line * 0.05) * 78 +
            Math.sin(progress * Math.PI * 5.1 - time * 0.00012) * 22 +
            line * 4.8 -
            lineCount * 2.4;

          if (x === -40) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.stroke();
      }

      context.restore();
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      drawWave(time);
      const connectionLimit = width < 700 ? 112 : 148;

      particles.forEach((particle, index) => {
        if (!reducedMotion.matches) {
          particle.x += particle.velocityX;
          particle.baseY += particle.velocityY;
          particle.y = particle.baseY + Math.sin(time * 0.0007 + particle.phase) * particle.amplitude;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.baseY < -30) particle.baseY = height + 30;
        if (particle.baseY > height + 30) particle.baseY = -30;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(particle.x - nextParticle.x, particle.y - nextParticle.y);

          if (distance < connectionLimit) {
            context.beginPath();
            const alpha = (1 - distance / connectionLimit) * (isDark ? 0.2 : 0.12);
            context.strokeStyle = isDark
              ? `rgba(196,167,231,${alpha})`
              : `rgba(74,27,122,${alpha})`;
            context.lineWidth = 0.7;
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.stroke();
          }
        }

        context.beginPath();
        context.globalAlpha = particle.color === "#E11D72" ? 0.72 : isDark ? 0.62 : 0.48;
        context.fillStyle = particle.color;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        if (index % 7 === 0) {
          context.beginPath();
          context.globalAlpha = 0.32;
          context.strokeStyle = particle.color;
          context.arc(particle.x, particle.y, particle.radius + 5, 0, Math.PI * 2);
          context.stroke();
        }
      });

      context.globalAlpha = 1;
      if (!reducedMotion.matches) animationFrame = window.requestAnimationFrame(draw);
    };

    const renderFromStart = () => {
      window.cancelAnimationFrame(animationFrame);
      draw();
    };

    const handleMotionChange = () => renderFromStart();
    const resizeObserver = new ResizeObserver(() => {
      resize();
      renderFromStart();
    });
    const themeObserver = new MutationObserver(() => {
      const nextIsDark = document.documentElement.classList.contains("dark");
      if (nextIsDark === isDark) return;
      isDark = nextIsDark;
      createParticles();
      renderFromStart();
    });

    resizeObserver.observe(container);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
};
