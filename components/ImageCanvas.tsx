import React, { useRef, useEffect, useState } from 'react';
import { PicsumImage } from '../models/PicsumImage';
import useThrottle from '../utils/utils';

type ImageCanvasProps = {
  image?: PicsumImage;
};
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const IMAGE_WIDTH = 640;
const IMAGE_HEIGHT = 480;

function ImageCanvas({ image }: ImageCanvasProps) {
  // console.log(image);
  let canvasT = null || undefined;
  const canvasRef = useRef<HTMLCanvasElement>(canvasT);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  let scrollLeftSide = canvasRef?.current?.scrollLeft;

  const onDragStart = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollLeftSide);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const rightClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    e.preventDefault();
    if (isDrag) {
      return console.log('우클!');
    }
  };
  const onDragMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = canvasRef?.current;
      scrollLeftSide = startX - e.pageX;
      console.log(scrollLeftSide);
      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
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
      <canvas
        className="canvas"
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onMouseDown={onDragStart}
        onMouseMove={onThrottleDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onContextMenu={rightClick}
      />
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
