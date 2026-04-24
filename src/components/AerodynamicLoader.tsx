import { useEffect, useRef, useState } from "react";

const AerodynamicLoader = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Aerodynamic simulation parameters (Potential flow around a cylinder)
    const U = 6; // Free-stream velocity (speed of flow)
    const R = Math.min(width, height) * 0.15; // Cylinder radius (obstacle size)
    const R2 = R * R;
    const cx = width / 2;
    const cy = height / 2;

    class Particle {
      x: number;
      y: number;
      history: { x: number; y: number }[];
      maxHistory: number;
      life: number;
      direction: number;
      u: number;

      constructor() {
        this.direction = Math.random() > 0.5 ? 1 : -1;
        this.u = U * this.direction;
        
        if (this.direction === 1) {
          this.x = -Math.random() * 200; // Start off-screen left
        } else {
          this.x = width + Math.random() * 200; // Start off-screen right
        }
        
        this.y = Math.random() * height;
        this.history = [];
        this.maxHistory = 40 + Math.random() * 40;
        this.life = 0;
      }

      update() {
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxHistory) {
          this.history.shift();
        }

        // Translate to cylinder-centric coordinates
        const dx = this.x - cx;
        const dy = this.y - cy;
        const r2 = dx * dx + dy * dy;

        let vx = this.u;
        let vy = 0;

        // Apply ideal fluid flow vector field (superposition of uniform flow and doublet)
        if (r2 > R2 * 0.8) {
          const r4 = r2 * r2;
          vx = this.u * (1 - (R2 * (dx * dx - dy * dy)) / r4);
          vy = this.u * ((-R2 * 2 * dx * dy) / r4);
        } else {
          // Inside or very close to boundary, force them around
          vx = this.u * 0.1;
          vy = dy > 0 ? Math.abs(this.u) : -Math.abs(this.u);
        }

        // Add slight turbulence/noise for organic feel
        vx += (Math.random() - 0.5) * 0.3;
        vy += (Math.random() - 0.5) * 0.3;

        this.x += vx;
        this.y += vy;
        this.life++;

        // Reset if it goes off-screen to the right or out of bounds vertically
        if ((this.direction === 1 && this.x > width + 100) || 
            (this.direction === -1 && this.x < -100) || 
            this.y < -100 || this.y > height + 100) {
              
          this.direction = Math.random() > 0.5 ? 1 : -1;
          this.u = U * this.direction;
          
          if (this.direction === 1) {
            this.x = -10 - Math.random() * 50;
          } else {
            this.x = width + 10 + Math.random() * 50;
          }
          this.y = Math.random() * height;
          this.history = [];
          this.life = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
        if (this.history.length < 2) return;

        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }

        // Fade out trail based on life and position in history
        const fadeMultiplier = Math.min(1, this.life / 10);
        const color = isDark
          ? `rgba(96, 165, 250, ${fadeMultiplier * 0.5})`
          : `rgba(0, 16, 62, ${fadeMultiplier * 0.3})`;

        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 300; i++) {
      particles.push(new Particle());
      // Pre-warm the simulation so particles are spread out initially
      for (let j = 0; j < Math.random() * (width / U); j++) {
        particles[i].update();
      }
    }

    let animationId: number;

    const render = () => {
      const isDark = document.documentElement.classList.contains("dark");

      // Clear with very low opacity to create trail blur effect
      ctx.fillStyle = isDark
        ? "rgba(15, 23, 42, 0.15)"
        : "rgba(243, 251, 248, 0.15)";
      ctx.fillRect(0, 0, width, height);

      // Draw the "obstacle" (invisible aerodynamic body / core)
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.9, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? "#0f172a" : "#f3fbf8";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.9, 0, Math.PI * 2);
      ctx.strokeStyle = isDark
        ? "rgba(96, 165, 250, 0.1)"
        : "rgba(0, 16, 62, 0.1)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Core text
      ctx.fillStyle = isDark ? "#f8fafc" : "#00103e";
      ctx.font = 'bold 20px "Lexend", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("PHYS_ARCH", cx, cy - 12);

      ctx.font = '12px "Inter", monospace';
      ctx.fillStyle = isDark ? "#60a5fa" : "#3E92CC";
      ctx.fillText("INITIALIZING...", cx, cy + 16);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx, isDark);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    // Sequence timing
    const loadTimer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        onComplete();
      }, 1000); // Wait for fade transition to finish
    }, 2800);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(loadTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-100 bg-surface transition-opacity duration-1000 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default AerodynamicLoader;
