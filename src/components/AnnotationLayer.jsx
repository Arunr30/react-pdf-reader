import { useEffect, useRef } from "react";
import * as fabric from "fabric";

let activeCanvas = null;

export function getCanvas() {
  return activeCanvas;
}

export default function AnnotationLayer({ page }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    activeCanvas = canvas;

    canvas.isDrawingMode = false;

    return () => {
      canvas.dispose();
      activeCanvas = null;
    };
  }, [page]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={800}
      style={{ position: "absolute", top: 0, left: 0 }}
    />
  );
}
