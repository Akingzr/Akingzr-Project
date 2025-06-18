// Cursor trail component for AKINGZ landing page
// Updated with new color palette (teal/cyan theme)

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  life: number;
  decay: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Add new particles
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: mouse.current.x + (Math.random() - 0.5) * 20,
          y: mouse.current.y + (Math.random() - 0.5) * 20,
          life: 1,
          decay: 0.02 + Math.random() * 0.02
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.life -= particle.decay;

        if (particle.life <= 0) return false;

        // Draw particle with new teal/cyan colors
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, 10
        );
        
        gradient.addColorStop(0, `rgba(18, 168, 227, ${particle.life * 0.8})`); // bright aqua
        gradient.addColorStop(0.5, `rgba(0, 93, 116, ${particle.life * 0.4})`); // ocean teal
        gradient.addColorStop(1, `rgba(18, 168, 227, 0)`); // bright aqua fade

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 10 * particle.life, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;