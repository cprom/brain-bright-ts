import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { type ChangeEvent, useRef, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

import ModeIcon from '@mui/icons-material/Mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faInfo, faPen, faRedo, faTrash, faUndo } from "@fortawesome/free-solid-svg-icons";

 function Canvas() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [eraserWidth, setEraserWidth] = useState(10);

  const handleStrokeWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(+event.target.value);
  };

  const handleEraserWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEraserWidth(+event.target.value);
  };


  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleClearClick = () => {
    canvasRef.current?.clearCanvas();
  };

  const handleResetClick = () => {
    canvasRef.current?.resetCanvas();
  };

  return (
    <div className="d-flex flex-column gap-2 p-2">
      <Typography>Tools</Typography>
      <Typography >
          Pen width
        </Typography>
        <input
          disabled={eraseMode}
          type="range"
          className="form-range"
          min="1"
          max="10"
          step="1"
          id="strokeWidth"
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
        />
        <Typography>
          Eraser width
        </Typography>
        <input
          disabled={!eraseMode}
          type="range"
          className="form-range"
          min="1"
          max="20"
          step="1"
          id="eraserWidth"
          value={eraserWidth}
          onChange={handleEraserWidthChange}
        />
      <Stack spacing={1}>
        <Button
          disabled={!eraseMode}
          onClick={handlePenClick}
          variant="outlined"
          size="small"
          startIcon={<FontAwesomeIcon icon={faPen} />}
        >
          Pen
        </Button>
        <Button
          variant="outlined"
          size="small"
          disabled={eraseMode}
          onClick={handleEraserClick}
          startIcon={<FontAwesomeIcon icon={faEraser} />}
        >
          Eraser
        </Button>
        <div className="vr" />
        <Button
          variant="outlined"
          size="small"
          onClick={handleUndoClick}
          startIcon={<FontAwesomeIcon icon={faUndo} />}
        >
          Undo
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={handleRedoClick}
          startIcon={<FontAwesomeIcon icon={faRedo} />}
        >
          Redo
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={handleClearClick}
          startIcon={<FontAwesomeIcon icon={faTrash} />}
        >
          Clear
        </Button>
        {/* <Button
          variant="outlined"
          size="small"
          onClick={handleResetClick}
        >
          Reset
        </Button> */}
      </Stack>
      <Typography>Scratch Pad</Typography>
      <ReactSketchCanvas 
        ref={canvasRef}
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
        />
    </div>
  );
}
export default Canvas