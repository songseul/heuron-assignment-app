import React, { useRef, useEffect, useState, useCallback } from 'react';
import { PicsumImage } from '../models/PicsumImage';
import useThrottle from '../hooks/useThrottle';

type ImageCanvasProps = {
  image?: PicsumImage;
};
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const IMAGE_WIDTH = 640;
const IMAGE_HEIGHT = 480;

function ImageCanvas({ image }: ImageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [radian, setRadian] = useState(0);

  const getRotateAngle = useCallback(
    (zoom: number) => {
      switch (radian) {
        case 0:
          return zoom > 1 ? radian + 90 : 270;
        case 270:
          return zoom > 1 ? 0 : radian - 90;
        default:
          return zoom > 1 ? radian + 90 : radian - 90;
      }
    },
    [radian]
  );

  const radToDeg = (angle: number) => {
    return (angle * Math.PI) / 180;
  };

  const onDragStart = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (isDrag) {
      const img = new Image();
      if (image) {
        img.src = image?.download_url;
      }
      const ctx = canvasRef?.current?.getContext('2d');
      ctx?.save();

      const zoom = e.pageX - startX > 0 ? 1.05 : 0.95;
      if (e.buttons === 1) {
        ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx?.scale(zoom, zoom);
        ctx?.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
      } else if (e.buttons === 2) {
        ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        const angle = getRotateAngle(zoom);
        if (angle < 90) {
          ctx?.translate(0, 0);
        } else if (angle < 180) {
          ctx?.translate(IMAGE_WIDTH, 0);
        } else if (angle < 270) {
          ctx?.translate(IMAGE_WIDTH, IMAGE_HEIGHT);
        } else {
          ctx?.translate(0, IMAGE_HEIGHT);
        }
        ctx?.rotate(radToDeg(angle));

        ctx?.translate(0, 0);
        ctx?.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
        ctx?.restore();
        setRadian(angle);
      }
    }
  };

  const onContextMenu = (e: React.MouseEvent<HTMLCanvasElement>) => {
    e.preventDefault();
  };

  const delay = 100;
  const onThrottleDragMove = useThrottle<
    [React.MouseEvent<HTMLCanvasElement, MouseEvent>]
  >(onDragMove, delay);

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (canvas == null) {
      return;
    }
    const context = canvas.getContext('2d');
    if (context == null) {
      return;
    }

    if (image == null || image?.download_url == null) {
      return;
    }

    const img = new Image();

    img.src = image?.download_url;

    img.onload = () => {
      context.drawImage(img, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
    };
  }, [image]);

  return (
    <div className="canvas-container">
      {image ? (
        <canvas
          className="canvas"
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          onMouseDown={onDragStart}
          onMouseMove={onThrottleDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onContextMenu={onContextMenu}
        />
      ) : (
        <span> Image Loading...</span>
      )}
      <style jsx>
        {`
          .canvas-container {
            margin-top: 100px;
            width: 700px;
          }
          .canvas {
            width: 100%;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}

export default ImageCanvas;
