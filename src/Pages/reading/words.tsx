import { useState } from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import textToSpeech from "../../Utility/utility";

const red = "#FF6161";
const green = "#63E6bE";
const violet = "#B197FC";
const orange = "#FFA047";
const blue = "#74C0FC";
const yellow = "#FFD43B";

const levels = [
  {
    level: 1,
    title: "Level 1",
    color: red,
    words: ["be", "a", "the", "is", "it", "in", "to", "we", "me", "my"],
  },
  {
    level: 2,
    title: "Level 2",
    color: green,
    words: ["you", "he", "she", "can", "see", "like", "go", "up", "down", "and"],
  },
  {
    level: 3,
    title: "Level 3",
    color: violet,
    words: ["cat", "dog", "hat", "bat", "sun", "run", "cup", "bug", "bed", "pen"],
  },
  {
    level: 4,
    title: "Level 4",
    color: orange,
    words: ["mat", "rat", "sat", "fan", "man", "pan", "tan", "can", "ran", "dad"],
  },
  {
    level: 5,
    title: "Level 5",
    color: blue,
    words: ["hop", "mop", "top", "pop", "pig", "big", "wig", "dig", "fig", "sit"],
  },
  {
    level: 6,
    title: "Level 6",
    color: yellow,
    words: ["cat", "dog", "pig", "cow", "hen", "duck", "fish", "frog", "bear", "lion"],
  },
  {
    level: 7,
    title: "Level 7",
    color: red,
    words: ["red", "blue", "green", "yellow", "pink", "black", "white", "orange"],
  },
  {
    level: 8,
    title: "Level 8",
    color: green,
    words: ["ball", "book", "car", "toy", "hat", "shoe", "door", "cup", "bed", "pen"],
  },
  {
    level: 9,
    title: "Level 9",
    color: violet,
    words: ["after", "many", "should", "puppy", "window"],
  },
  {
    level: 10,
    title: "Level 10",
    color: orange,
    words: ["happy", "little", "mother", "father", "school", "teacher", "friend", "playground"],
  },
];


const Words = () => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const chooseLevel = (event: any) => {
    const level = parseInt(event.target.value);
    setSelectedLevel(level);
  };

  const selectedData = levels.find((x) => x.level === selectedLevel);

  const handleWordClick = (event: any) => {
    textToSpeech(event.target.value, 0.9);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Box sx={{ mt: 12 }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Practice Reading Words 📚
        </Typography>

        <Typography sx={{ fontSize: "1.2rem", mt: 1 }}>
           <Button></Button> 
          Choose a level, then click a word to hear it!
        </Typography>
      </Box>

      {/* LEVEL BUTTONS */}
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2 }}>
          Choose a Level
        </Typography>

        {levels.map((lvl) => (
          <Button
            key={lvl.level}
            id={`level-btn-${lvl.level}`}
            variant="contained"
            value={lvl.level}
            onClick={chooseLevel}
            color={selectedLevel === lvl.level ? "secondary" : "primary"}
            sx={{ fontSize: 20, fontWeight: "bold", margin: 0.5 }}
          >
            {lvl.level}
          </Button>
        ))}
      </Box>

      {/* WORD DISPLAY */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Paper elevation={5} sx={{ p: 4, borderRadius: 4, width: "80%" }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              mb: 3,
              color: selectedData?.color,
            }}
          >
            {selectedData?.title}
          </Typography>

          <Grid2 container spacing={2} justifyContent="center">
            {selectedData?.words.map((word, index) => (
              <Grid2 key={index}>
                <Button
                  variant="contained"
                  value={word}
                  onClick={handleWordClick}
                  sx={{
                    background: selectedData.color,
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    borderRadius: 3,
                    px: 4,
                    py: 2,
                    textTransform: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    style={{ marginRight: 10 }}
                  />
                  {word}
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      </Box>
    </Container>
  );
};

export default Words;
