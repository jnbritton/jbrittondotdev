import { useEffect, useRef } from 'react';

export const DitheringCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Dithering parameters
    const ditherMatrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5]
    ];
    
    const scale = 4;
    const cols = Math.ceil(canvas.width / scale);
    const rows = Math.ceil(canvas.height / scale);
    let time = 0;

    const animate = () => {
      ctx.fillStyle = 'hsl(0, 0%, 98%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          // Create topographical wave pattern
          const nx = x / cols;
          const ny = y / rows;
          
          // Multiple sine waves for topographical effect
          const wave1 = Math.sin(nx * Math.PI * 4 + time) * 0.3;
          const wave2 = Math.sin(ny * Math.PI * 3 - time * 0.7) * 0.3;
          const wave3 = Math.sin((nx + ny) * Math.PI * 2 + time * 0.5) * 0.2;
          
          const brightness = (wave1 + wave2 + wave3 + 1) / 2;
          
          // Apply dithering
          const threshold = ditherMatrix[y % 4][x % 4] / 16;
          const isDark = brightness < threshold;
          
          if (isDark) {
            ctx.fillStyle = 'hsl(0, 0%, 5%)';
            ctx.fillRect(x * scale, y * scale, scale, scale);
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};
