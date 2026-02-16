import { useState } from "react";
import { Box, Button, Container, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";

const red = "#FF6161";
const green = "#63E6bE";

// Generate a counting number based on level
const generateCountingNumbers = (level: number) => {
  const maxNumber = level * 5;
  return Math.floor(Math.random() * maxNumber) + 1;
};

interface CountingProblem {
  id: number;
  count: number;
  inputValue: string;
  status: "initial" | "correct" | "incorrect";
  highlightedIndex: number; // index of object being counted
}

const CountingRandomPractice = () => {
  const [level, setLevel] = useState(1);
  const [problems, setProblems] = useState<CountingProblem[]>(
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      count: generateCountingNumbers(1),
      inputValue: "",
      status: "initial",
      highlightedIndex: -1,
    }))
  );

const chooseLevel = (newLevel: number) => {
  setLevel(newLevel);

  const newProblems: CountingProblem[] = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    count: generateCountingNumbers(newLevel),
    inputValue: "",
    status: "initial" as const,
    highlightedIndex: -1,
  }));

  setProblems(newProblems);
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
          return { ...p, status: isCorrect ? "correct" : "incorrect" };
        }
        return p;
      })
    );
  };

  // Highlight objects with audio counting
//   const highlightCounting = (problemId: number) => {
//     const problem = problems.find((p) => p.id === problemId);
//     if (!problem) return;

//     let index = 0;
//     const interval = setInterval(() => {
//       setProblems((prev) =>
//         prev.map((p) =>
//           p.id === problemId ? { ...p, highlightedIndex: index } : p
//         )
//       );

//       // Speak the number (1,2,3...)
//       if (index < problem.count) {
//         const utterance = new SpeechSynthesisUtterance((index + 1).toString());
//         utterance.rate = 0.8;
//         utterance.lang = "en-US";
//         window.speechSynthesis.speak(utterance);
//       }

//       index++;
//       if (index > problem.count) {
//         clearInterval(interval);
//         setProblems((prev) =>
//           prev.map((p) => (p.id === problemId ? { ...p, highlightedIndex: -1 } : p))
//         );
//       }
//     }, 600); // 600ms per object
//   };

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

      {/* Level Buttons */}
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
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", mb: 2 , maxWidth: 600}}>
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
                    />
                  ))}
                </Box>

                {/* Hear & Highlight Button */}
                {/* <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => highlightCounting(p.id)}
                  sx={{ width: "100%" }}
                >
                  Hear & Count
                </Button> */}

                {/* Input */}
                <TextField
                  type="number"
                  value={p.inputValue}
                  onChange={(e) => handleInputChange(p.id, e.target.value)}
                  sx={{ width: "80px", textAlign: "center" }}
                />

                {/* Check */}
                <Button
                  variant="contained"
                  color={getButtonColor(p.status)}
                  onClick={() => checkAnswer(p.id)}
                  sx={{ mt: 1, width: "100%" }}
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

export default CountingRandomPractice