'use client';

import { useEffect, useRef, useState } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      targetOpacity: number;
      color: string;
      initialVx: number;
      initialVy: number;
      mass: number;
    }

    const particles: Particle[] = [];
    const particleCount = 80;
    const colors = ['#00d9ff', '#ff6b35', '#ffffff', '#8a92a2'];

    // Initialize particles with more sophisticated behavior
    for (let i = 0; i < particleCount; i++) {
      const vx = (Math.random() - 0.5) * 1;
      const vy = (Math.random() - 0.5) * 1;

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx,
        vy,
        radius: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.4 + 0.15,
        targetOpacity: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        initialVx: vx,
        initialVy: vy,
        mass: Math.random() * 0.5 + 0.5,
      });
    }

    const distance = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    };

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Mouse movement tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawParticles = () => {
      // Clear with very light semi-transparent fill for trail effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, index) => {
        // Smooth opacity transitions
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.02;

        // Mouse repulsion effect
        const distToMouse = distance(particle.x, particle.y, mouseX, mouseY);
        if (distToMouse < 150) {
          const angle = Math.atan2(particle.y - mouseY, particle.x - mouseX);
          const force = (150 - distToMouse) / 150;
          particle.vx += Math.cos(angle) * force * 0.3;
          particle.vy += Math.sin(angle) * force * 0.3;
        }

        // Friction/drag
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Random perturbation
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Velocity limits
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2;
          particle.vy = (particle.vy / speed) * 2;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges with smooth transition
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Occasionally change target opacity
        if (Math.random() < 0.002) {
          particle.targetOpacity = Math.random() * 0.4 + 0.15;
        }

        // Draw particle with glow
        const glowSize = particle.radius * 2.5;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize
        );

        gradient.addColorStop(0, particle.color.replace('#', '#') + Math.floor(particle.opacity * 255).toString(16));
        gradient.addColorStop(0.5, particle.color + Math.floor(particle.opacity * 0.5 * 255).toString(16));
        gradient.addColorStop(1, particle.color + '00');

        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - glowSize,
          particle.y - glowSize,
          glowSize * 2,
          glowSize * 2
        );

        // Draw core
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connecting lines with dynamic opacity
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 6, particles.length); j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = '#00d9ff';
            ctx.globalAlpha = opacity;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
