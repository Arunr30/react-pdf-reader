import { useEffect, useRef } from "react";
import * as fabric from "fabric";

let activeCanvas = null;
export const getCanvas = () => activeCanvas;

export default function AnnotationLayer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      selection: true,
    });

    activeCanvas = canvas;

    return () => {
      canvas.dispose();
      activeCanvas = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={800}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    />
  );
}
