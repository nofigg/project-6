import React, { useEffect, useRef } from 'react';

interface FluidSimulationProps {
  className?: string;
}

function FluidSimulation({ className = '' }: FluidSimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let particles: Particle[] = [];
    let isMousePressed = false;
    let mouseX = 0;
    let mouseY = 0;

    class Particle {
      constructor(
        public x: number,
        public y: number,
        public radius: number,
        public velocity: { x: number; y: number },
        public color: string
      ) {}

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x + this.radius > width || this.x - this.radius < 0) {
          this.velocity.x = -this.velocity.x;
        }

        if (this.y + this.radius > height || this.y - this.radius < 0) {
          this.velocity.y = -this.velocity.y;
        }

        this.draw();
      }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      isMousePressed = true;
    };

    const handleMouseUp = () => {
      isMousePressed = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.update();

        for (let i = index + 1; i < particles.length; i++) {
          const dx = particle.x - particles[i].x;
          const dy = particle.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < particle.radius + particles[i].radius) {
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            const tempVelocity = {
              x: particle.velocity.x * cos + particle.velocity.y * sin,
              y: particle.velocity.y * cos - particle.velocity.x * sin
            };

            particle.velocity.x = particles[i].velocity.x * cos + particles[i].velocity.y * sin;
            particle.velocity.y = particles[i].velocity.y * cos - particles[i].velocity.x * sin;

            particles[i].velocity.x = tempVelocity.x;
            particles[i].velocity.y = tempVelocity.y;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const init = () => {
      particles = [];

      for (let i = 0; i < 100; i++) {
        const radius = Math.random() * 5 + 2;
        const x = Math.random() * (width - radius * 2) + radius;
        const y = Math.random() * (height - radius * 2) + radius;
        const velocity = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2
        };
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

        particles.push(new Particle(x, y, radius, velocity, color));
      }

      animate();
    };

    init();

    window.addEventListener('resize', init);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', init);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
    />
  );
}

export default FluidSimulation;
