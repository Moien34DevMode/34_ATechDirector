import { useEffect, useRef } from 'react';
import styles from './CodeRain.module.css';

interface CodeRainProps {
  className?: string;
}

const CHARS =
  'const let function return if else for while class import export default type interface extends implements async await void null undefined true false => {} [] () ; . < > = ! & | 0 1 { } Technical director scene world system entity component render update init destroy loop event trigger state machine quest dialogue choice branch node graph tree mesh shader vertex fragment uniform sampler texture atlas sprite animation keyframe easing lerp clamp map filter reduce push pop shift splice slice join split trim parse JSON fetch async Promise resolve reject then catch finally'.split(
    ' ',
  );

const SYNTAX_COLORS = [
  '#569cd6', // keyword blue
  '#4ec9b0', // teal/type
  '#9cdcfe', // variable light blue
  '#ce9178', // string orange
  '#6a9955', // comment green
  '#c586c0', // purple/control
  '#dcdcaa', // function yellow
];

const FONT_SIZE = 13;
const COL_WIDTH = 90;
const LINES_PER_COL = 18;
const FRAME_INTERVAL = 60;

export default function CodeRain({ className }: CodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let columnCount = 0;
    let yPositions: number[] = [];
    let animFrameId: number;
    let lastTime = 0;

    function initColumns() {
      columnCount = Math.ceil(canvas!.width / COL_WIDTH);
      yPositions = Array.from(
        { length: columnCount },
        () => Math.random() * canvas!.height,
      );
    }

    function drawFrame(now: number) {
      animFrameId = requestAnimationFrame(drawFrame);

      if (now - lastTime < FRAME_INTERVAL) return;
      lastTime = now;

      // Fading trail over full canvas
      ctx!.fillStyle = 'rgba(0,0,0,0.18)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let col = 0; col < columnCount; col++) {
        const columnY = yPositions[col];
        const x = col * COL_WIDTH + 4;

        for (let lineIndex = 0; lineIndex < LINES_PER_COL; lineIndex++) {
          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          const lineY = columnY - (LINES_PER_COL - 1 - lineIndex) * (FONT_SIZE + 2);

          if (lineIndex === LINES_PER_COL - 1) {
            // Leading bright character
            ctx!.fillStyle = 'rgba(255,255,255,0.9)';
            ctx!.font = `bold ${FONT_SIZE}px 'JetBrains Mono', 'Fira Code', monospace`;
          } else {
            const color = SYNTAX_COLORS[Math.floor(Math.random() * SYNTAX_COLORS.length)];
            // Parse hex color and apply at 25% opacity
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            ctx!.fillStyle = `rgba(${r},${g},${b},0.25)`;
            ctx!.font = `${FONT_SIZE}px 'JetBrains Mono', 'Fira Code', monospace`;
          }

          ctx!.fillText(char, x, lineY);
        }

        // Advance column
        yPositions[col] += FONT_SIZE + 2;
        if (yPositions[col] > canvas!.height + 200) {
          yPositions[col] = -Math.random() * canvas!.height;
        }
      }
    }

    function resize() {
      const { width, height } = canvas!.getBoundingClientRect();
      canvas!.width = Math.floor(width);
      canvas!.height = Math.floor(height);
      initColumns();
    }

    const observer = new ResizeObserver(() => {
      resize();
    });
    observer.observe(canvas);

    resize();
    animFrameId = requestAnimationFrame(drawFrame);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas}${className ? ` ${className}` : ''}`}
    />
  );
}
