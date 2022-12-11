import React, { useRef, useEffect, useMemo, useState } from 'react';

type DetailProps = {
  image: string;
};
const SCROLL_SENSITIVITY = 0.0005;
const MAX_ZOOM = 5;
const MIN_ZOOM = 0.1;

function ImageCanvas({ image }: DetailProps) {
  // console.log(image);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    const img = new Image();
    img.src = `https://${image}`;
    img.onload = () => {
      context?.drawImage(img, 0, 0, 700, 500);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas className="canvas" ref={canvasRef} width={700} height={500} />
      <style jsx>
        {`
          .canvas-container {
            margin-top: 100px;
            width: 700px;
          }
          .canvas {
            width: 100%;
            background-color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default ImageCanvas;
