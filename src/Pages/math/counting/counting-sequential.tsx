import { useState } from "react";
import { Box, Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import GreatJob from "../../../components/modal/great-job";

const red = "#FF6161";
const green = "#63E6bE";


const createSequentialProblems = (level: number): CountingProblem[] => {
  const start = (level - 1) * 10 + 1; // Level 1 → 1, Level 2 → 11          // Level 1 → 10, Level 2 → 20

  return Array.from({ length: 10 }, (_, i) => ({
    id: i,
    count: start + i, // First 5 numbers in that level range
    inputValue: "",
    status: "initial" as const,
    highlightedIndex: -1,
    disabled: false,
  }));
};

interface CountingProblem {
  id: number;
  count: number;
  inputValue: string;
  status: "initial" | "correct" | "incorrect";
  highlightedIndex: number; 
  disabled: boolean;
}

const CountingSequential = () => {
  const [level, setLevel] = useState(1);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
const [problems, setProblems] = useState<CountingProblem[]>(
  createSequentialProblems(1)
);

const chooseLevel = (newLevel: number) => {
  setLevel(newLevel);
  setProblems(createSequentialProblems(newLevel));
  setCorrectAnswerCounter(0);
};

  const handleInputChange = (id: number, value: string) => {
    setProblems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inputValue: value } : p))
    );
  };

const checkAnswer = (id: number) => {
  setProblems((prev) =>
    prev.map((p) => {
      if (p.id === id) {
        const isCorrect = parseInt(p.inputValue) === p.count;

        if (isCorrect && p.status !== "correct") {
          setCorrectAnswerCounter((prevCount) => prevCount + 1);
        }

        return {
          ...p,
          status: isCorrect ? "correct" : "incorrect",
          disabled: isCorrect,
        };
      }
      return p;
    })
  );
};

  const getButtonColor = (status: "initial" | "correct" | "incorrect") => {
    switch (status) {
      case "correct": return "success";
      case "incorrect": return "error";
      default: return "primary";
    }
  };

  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography sx={{ fontSize: "2rem", fontWeight: "bold", mb: 3 }}>Counting Practice</Typography>
        <Typography sx={{ fontSize: "1.2rem", mt: 1 }}>
          Count the circles and enter the number in the box.
        </Typography>

      <Box sx={{ mb: 4 }}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((lvl) => (
          <Button
            key={lvl}
            variant="contained"
            color={level === lvl ? "secondary" : "primary"}
            sx={{ m: 0.5, fontSize: 18, fontWeight: "bold" }}
            onClick={() => chooseLevel(lvl)}
          >
            {lvl}
          </Button>
        ))}
      </Box>
        {
                correctAnswerCounter == 10
                ? 
                <div className='center-container'><GreatJob count={correctAnswerCounter} /></div>
                :
                ""
                }

    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',     
            width: '100%',            
            }}>   
      
        {problems.map((p) => (
          <Paper key={p.id} elevation={5} sx={{p: 2, m: 2}}>
          <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" textAlign='center' size="grow">
              <Stack spacing={2} alignItems="center">
                {/* Display objects with highlighting */}
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", mb: 2 , maxWidth: 600, width: {xs: "70vw", sm:600}}}>
                  {Array.from({ length: p.count }, (_, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: i === p.highlightedIndex ? red : green,
                        m: 0.5,
                        transition: "background-color 0.3s",
                      }}
                    ></Box>
                    
                  ))}
                </Box>

                <TextField
                  type="number"
                  value={p.inputValue}
                  onChange={(e) => handleInputChange(p.id, e.target.value)}
                  sx={{ width: "80px", textAlign: "center" }}
                />

                <Button
                  variant="contained"
                  disabled={p.disabled}
                  className={p.status === "correct" ? "btn-correct" : "btn-initial"}
                  color={getButtonColor(p.status)}
                  onClick={() => checkAnswer(p.id)}
                  sx={{ mt: 1 }}
                >
                  {p.status === "initial"
                    ? "Check"
                    : p.status === "correct"
                    ? "Correct"
                    : "Incorrect"}
                </Button>
              </Stack>
          </Grid2>
            </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default CountingSequential