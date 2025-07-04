import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Button, Paper, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface GreatJobProps {
    count: number
}

const GreatJob = ({count}: GreatJobProps) => {
    const [open, setOpen] = useState(true);

    const handleCloseCard = () => {
        setOpen(false)
    }

    useEffect(() => {
        if(count === 10 || count === 12){
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        }
    }, [count])
    

  return (
    <>
        {
        open &&
        <Paper className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop">
            <div style={{marginBottom: 10}}>
            <FontAwesomeIcon icon={faTrophy} style={{color: "#FFD43B", fontSize: 100, marginTop: -70, padding: 0}} />
            </div>
            <Typography variant="h5">Great Job!</Typography>
            <Typography variant="h6">You got all {count} correct.</Typography>
            <Typography variant="h6">Keep going.</Typography>
        </div>
        <Button variant="contained" sx={{mt: 35}} onClick={handleCloseCard}>Close</Button>
    </Paper>
    }
    </>
  );
}

export default GreatJob;
