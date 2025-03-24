import { useEffect, useRef } from 'react';

class SpotlightEffect {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private frameId: number = 0;
  private isActive: boolean = true;
  private dpr: number;
  private lastRenderTime: number = 0;
  private readonly targetFPS: number = 30;
  private readonly frameInterval: number = 1000 / 30;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('2D context not supported');
    this.ctx = ctx;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.resize();
    this.addEventListeners();
    this.animate();
  }

  private resize = () => {
    const { width, height } = this.canvas.getBoundingClientRect();
    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  };

  private handleMouseMove = (e: MouseEvent) => {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = (e.clientX - rect.left) * this.dpr;
    this.mouseY = (e.clientY - rect.top) * this.dpr;
  };

  private addEventListeners() {
    const throttledMouseMove = this.throttle(this.handleMouseMove, 16);
    window.addEventListener('resize', this.resize, { passive: true });
    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    document.addEventListener('visibilitychange', () => {
      this.isActive = document.visibilityState === 'visible';
      if (this.isActive) this.animate();
    });
  }

  private throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  private animate = (currentTime: number = 0) => {
    if (!this.isActive) return;

    const delta = currentTime - this.lastRenderTime;
    if (delta < this.frameInterval) {
      this.frameId = requestAnimationFrame(this.animate);
      return;
    }

    this.lastRenderTime = currentTime - (delta % this.frameInterval);

    // Clear canvas with background color
    this.ctx.fillStyle = '#0A0118';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Create and draw spotlight with optimized gradient
    const gradient = this.ctx.createRadialGradient(
      this.mouseX,
      this.mouseY,
      0,
      this.mouseX,
      this.mouseY,
      900 * this.dpr
    );

    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.125)');
    gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.0625)');
    gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.frameId = requestAnimationFrame(this.animate);
  };

  public cleanup() {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    cancelAnimationFrame(this.frameId);
  }
}

function FluidSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const effectRef = useRef<SpotlightEffect | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && !effectRef.current) {
      try {
        effectRef.current = new SpotlightEffect(canvas);
      } catch (error) {
        console.error('Failed to initialize SpotlightEffect:', error);
      }
    }

    return () => {
      effectRef.current?.cleanup();
      effectRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full"
      style={{ background: '#0A0118' }}
    />
  );
}

export default FluidSimulation;
