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

const sentenceLevels = [
  {
    level: 1,
    title: "Level 1",
    color: red,
    sentences: [
      "I see a cat.",
      "I see a dog.",
      "I like you.",
      "I can run.",
      "I can jump.",
      "It is big.",
      "It is red.",
      "I have a hat.",
      "We can go.",
      "I am happy.",
    ],
  },
  {
    level: 2,
    title: "Level 2",
    color: green,
    sentences: [
      "The cat is big.",
      "The dog can run.",
      "I like my mom.",
      "I like my dad.",
      "We see the sun.",
      "The ball is red.",
      "I can hop.",
      "I can clap.",
      "She can sing.",
      "He can jump.",
    ],
  },
  {
    level: 3,
    title: "Level 3",
    color: violet,
    sentences: [
      "I see a big dog.",
      "I see a red ball.",
      "The sun is up.",
      "The cat is on the bed.",
      "The dog is in the yard.",
      "I can sit down.",
      "I can stand up.",
      "I like to play.",
      "We can play a game.",
      "I see my friend.",
    ],
  },
  {
    level: 4,
    title: "Level 4",
    color: orange,
    sentences: [
      "The cat is on the mat.",
      "The dog is in the house.",
      "I can run fast.",
      "I can jump high.",
      "We like to play outside.",
      "I see a bird in the sky.",
      "The fish is in the water.",
      "I like to read books.",
      "My mom has a car.",
      "My dad has a hat.",
    ],
  },
  {
    level: 5,
    title: "Level 5",
    color: blue,
    sentences: [
      "I can see the sun.",
      "You can see the moon.",
      "We can go to school.",
      "I like to eat apples.",
      "The dog and cat play.",
      "She has a red hat.",
      "He has a blue ball.",
      "The bird can fly.",
      "I see a green tree.",
      "The frog can hop.",
    ],
  },
  {
    level: 6,
    title: "Level 6",
    color: yellow,
    sentences: [
      "I eat breakfast in the morning.",
      "I brush my teeth.",
      "I go to school.",
      "I play with my friends.",
      "I like my teacher.",
      "I read a book.",
      "I drink water.",
      "I go home after school.",
      "I help my mom.",
      "I help my dad.",
    ],
  },
  {
    level: 7,
    title: "Level 7",
    color: red,
    sentences: [
      "The monkey likes bananas.",
      "The lion is very big.",
      "The duck swims in the pond.",
      "The frog jumps on the rock.",
      "The bear sleeps at night.",
      "The bird sings a song.",
      "The dog plays with a ball.",
      "The cat drinks milk.",
      "I like to ride my bike.",
      "I like to draw pictures.",
    ],
  },
  {
    level: 8,
    title: "Level 8",
    color: green,
    sentences: [
      "I can count to ten.",
      "I like to play at the park.",
      "The baby is sleeping.",
      "My family loves me.",
      "I like to watch cartoons.",
      "The boy kicks the ball.",
      "The girl has a doll.",
      "I like to sing and dance.",
      "We go to the store.",
      "The teacher reads a story.",
    ],
  },
  {
    level: 9,
    title: "Level 9",
    color: violet,
    sentences: [
      "I like to read books at school.",
      "My mom takes me to the park.",
      "My dad helps me ride my bike.",
      "The dog runs fast in the yard.",
      "The cat sleeps on the bed.",
      "I like to play with my toys.",
      "We eat lunch in the cafeteria.",
      "I love my family very much.",
      "The bird flies over the trees.",
      "I can write my name.",
    ],
  },
  {
    level: 10,
    title: "Level 10",
    color: orange,
    sentences: [
      "I like to play outside with my friends.",
      "The teacher helps me learn new words.",
      "I can read a story all by myself.",
      "My family and I go to the park on weekends.",
      "The dog runs and jumps in the yard.",
      "I like to draw pictures and color them.",
      "The cat sleeps on the couch every day.",
      "I eat breakfast before I go to school.",
      "I like to learn letters and sounds.",
      "I feel proud when I read a sentence.",
    ],
  },
];

const Sentences = () => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const chooseLevel = (event: any) => {
    const level = parseInt(event.target.value);
    setSelectedLevel(level);
  };

  const selectedData = sentenceLevels.find((x) => x.level === selectedLevel);

  const handleSentenceClick = (event: any) => {
    textToSpeech(event.target.value, 0.85);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Box sx={{ mt: 12 }}>
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Sentence Reading 📖
        </Typography>

        <Typography sx={{ fontSize: "1.2rem", mt: 1 }}>
          Choose a level and click a sentence to hear it!
        </Typography>
      </Box>

      {/* LEVEL BUTTONS */}
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 2 }}>
          Choose a Level
        </Typography>

        {sentenceLevels.map((lvl) => (
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

      {/* SENTENCE LIST */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <Paper elevation={5} sx={{ p: 4, borderRadius: 4, width: "85%" }}>
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
            {selectedData?.sentences.map((sentence, index) => (
              <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Button
                  variant="contained"
                  value={sentence}
                  onClick={handleSentenceClick}
                  sx={{
                    background: selectedData?.color,
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderRadius: 3,
                    width: "100%",
                    py: 2,
                    textTransform: "none",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faVolumeHigh}
                    style={{ marginRight: 10 }}
                  />
                  {sentence}
                </Button>
              </Grid2>
            ))}
          </Grid2>
        </Paper>
      </Box>
    </Container>
  );
};

export default Sentences;
