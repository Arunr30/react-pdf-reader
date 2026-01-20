import { getCanvas } from "./AnnotationLayer";
import * as fabric from "fabric";

export default function Toolbar() {
  const enableDraw = () => {
    const canvas = getCanvas();
    if (!canvas) return;

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width = 3;
    canvas.freeDrawingBrush.color = "#ff1744";
  };

  const addText = () => {
    const canvas = getCanvas();
    if (!canvas) return;

    canvas.isDrawingMode = false;

    const text = new fabric.Textbox("Edit me", {
      left: 100,
      top: 100,
      fontSize: 18,
      fill: "#1a237e",
      fontWeight: "bold",
    });

    canvas.add(text);
    canvas.setActiveObject(text);
  };

  return (
    <div className="toolbar">
      <button onClick={addText}>Add Text</button>
      <button onClick={enableDraw}>Draw</button>
    </div>
  );
}
