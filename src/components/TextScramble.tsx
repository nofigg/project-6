import { useEffect, useRef, useCallback } from 'react';

class TextScrambleEffect {
  private el: HTMLElement;
  private chars: string;
  private queue: { from: string; to: string; start: number; end: number; char?: string }[];
  private frame: number;
  private frameRequest: number;
  private resolve!: (value: unknown) => void;
  private originalText: string;
  private isAnimating: boolean;
  private readonly frameInterval: number = 1000 / 41.67;
  private lastRenderTime: number = 0;

  constructor(el: HTMLElement, delay: number = 0) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#_$%&@';
    this.queue = [];
    this.frame = 0;
    this.frameRequest = 0;
    this.resolve = null;
    this.originalText = this.el.textContent || '';
    this.isAnimating = false;

    this.el.setAttribute('aria-label', this.originalText);

    if (delay > 0) {
      setTimeout(() => this.scramble(), delay);
    } else {
      this.scramble();
    }
  }

  scramble() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const text = this.originalText;
    const oldText = this.el.textContent || '';
    const length = Math.max(oldText.length, text.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(i * 0.5);
      const end = start + 6;
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  private update = (currentTime: number = 0) => {
    if (!this.isAnimating) return;

    const delta = currentTime - this.lastRenderTime;
    if (delta < this.frameInterval) {
      this.frameRequest = requestAnimationFrame(this.update);
      return;
    }

    this.lastRenderTime = currentTime - (delta % this.frameInterval);

    let output = '';
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.5) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<span class="text-primary-400">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.isAnimating = false;
      this.resolve?.();
    } else {
      this.frame++;
      this.frameRequest = requestAnimationFrame(this.update);
    }
  };

  public cleanup() {
    cancelAnimationFrame(this.frameRequest);
    this.isAnimating = false;
  }
}

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

function TextScramble({ text, className = '', delay = 0 }: TextScrambleProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<TextScrambleEffect | null>(null);

  const initEffect = useCallback(() => {
    if (elementRef.current) {
      effectRef.current?.cleanup();
      effectRef.current = new TextScrambleEffect(elementRef.current, delay);
    }
  }, [delay]);

  useEffect(() => {
    initEffect();
    return () => {
      effectRef.current?.cleanup();
    };
  }, [text, delay, initEffect]);

  return (
    <div ref={elementRef} className={className}>
      {text}
    </div>
  );
}

export default TextScramble;
