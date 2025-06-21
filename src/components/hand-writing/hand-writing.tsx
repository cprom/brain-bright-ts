import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { type ChangeEvent, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faPen, faPenToSquare, faRedo, faTrash, faUndo } from "@fortawesome/free-solid-svg-icons";
import { Button, Stack, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  // const handleResetClick = () => {
  //   canvasRef.current?.resetCanvas();
  // };

  return (
    <div className="d-flex flex-column gap-2 p-2">
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><FontAwesomeIcon icon={faPenToSquare} style={{marginRight: '10px', color: '#63E6bE'}}/>Scratch Pad</Typography>
        </AccordionSummary>
        <AccordionDetails>
      <Typography >
          Pen width
        </Typography>
        <input
          disabled={eraseMode}
          type="range"
          min="1"
          max="10"
          step="1"
          id="strokeWidth"
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
          className="slider"
        />
        <Typography>
          Eraser width
        </Typography>
        <input
          disabled={!eraseMode}
          type="range"
          min="1"
          max="20"
          step="1"
          id="eraserWidth"
          value={eraserWidth}
          onChange={handleEraserWidthChange}
          className="slider"
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
      <Typography sx={{mt: 1}}>Scratch Pad</Typography>
      <ReactSketchCanvas 
        ref={canvasRef}
        strokeWidth={strokeWidth}
        eraserWidth={eraserWidth}
        height="200px"
        style={{border: '1px solid #B197FC', opacity: '.5'}}
        />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Canvas