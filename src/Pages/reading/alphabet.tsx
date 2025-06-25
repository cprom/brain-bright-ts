import { Box, Button, Container, Grid2, Paper, Typography } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";


    const red = '#FF6161'
    const green = '#63E6bE'
    const violet = '#B197FC'
    const orange = '#FFA047'
    const blue = '#74C0FC'
    const yellow = '#FFD43B'



const alphabet = [
    {
        id: 1,
        letterCap: 'a',
        letterLow: 'a',
        pronounciation: ['ah','a'],
        color: red

    },
    {
        id: 2,
        letterCap: 'b',
        letterLow: 'b',
        pronounciation: ['buh'],
        color: green

    },
    {
        id: 3,
        letterCap: 'c',
        letterLow: 'c',
        pronounciation: ['cuh','suh'],
        color: violet

    },
    {
        id: 4,
        letterCap: 'd',
        letterLow: 'd',
        pronounciation: ['duh'],
        color: orange

    },
    {
        id: 5,
        letterCap: 'e',
        letterLow: 'e',
        pronounciation: ['eh', 'ee'],
        color: blue

    },
    {
        id: 6,
        letterCap: 'f',
        letterLow: 'f',
        pronounciation: ['fuh'],
        color: yellow

    },
    {
        id: 7,
        letterCap: 'g',
        letterLow: 'g',
        pronounciation: ['guh', 'juh'],
        color: red

    },
    {
        id: 8,
        letterCap: 'h',
        letterLow: 'h',
        pronounciation: ['huh'],
        color: green

    },
    {
        id: 9,
        letterCap: 'i',
        letterLow: 'i',
        pronounciation: ['eeh', 'i'], //! Need to fix pro
        color: violet

    },
    {
        id: 10,
        letterCap: 'j',
        letterLow: 'j',
        pronounciation: ['juh'],
        color: orange

    },
    {
        id: 11,
        letterCap: 'k',
        letterLow: 'k',
        pronounciation: ['kuh'], 
        color: blue

    },
    {
        id: 12,
        letterCap: 'l',
        letterLow: 'l',
        pronounciation: ['luh', 'ul'], //! Need to fix pro
        color: yellow

    },
    {
        id: 13,
        letterCap: 'm',
        letterLow: 'm',
        pronounciation: ['muh'], 
        color: red

    },
    {
        id: 14,
        letterCap: 'n',
        letterLow: 'n',
        pronounciation: ['nuh'], //! Need to fix pro
        color: green

    },
    {
        id: 15,
        letterCap: 'o',
        letterLow: 'o',
        pronounciation: ['uh', 'oh','u'], //! Need to fix pro
        color: violet

    },
    {
        id: 16,
        letterCap: 'p',
        letterLow: 'p',
        pronounciation: ['puh'], 
        color: orange

    },
    {
        id: 17,
        letterCap: 'q',
        letterLow: 'q',
        pronounciation: ['kwuh'], 
        color: blue

    },
    {
        id: 18,
        letterCap: 'r',
        letterLow: 'r',
        pronounciation: ['ruh', 'ur'], //! Need to fix pro
        color: yellow

    },
    {
        id: 19,
        letterCap: 's',
        letterLow: 's',
        pronounciation: ['suh'], //! Need to fix pro
        color: red

    },
    {
        id: 20,
        letterCap: 't',
        letterLow: 't',
        pronounciation: ['tuh'], 
        color: green

    },
    {
        id: 21,
        letterCap: 'u',
        letterLow: 'u',
        pronounciation: ['uh', 'yoo'], //! Need to fix pro
        color: violet

    },
    {
        id: 22,
        letterCap: 'v',
        letterLow: 'v',
        pronounciation: ['vuh'], //! Need to fix pro
        color: orange

    },
    {
        id: 23,
        letterCap: 'w',
        letterLow: 'w',
        pronounciation: ['wuh'], //! Need to fix pro
        color: blue

    },
    {
        id: 24,
        letterCap: 'x',
        letterLow: 'x',
        pronounciation: ['x','zuh'], //! Need to fix pro
        color: yellow

    },
    {
        id: 25,
        letterCap: 'y',
        letterLow: 'y',
        pronounciation: ['yuh', 'e', 'i'], //! Need to fix pro
        color: red

    },
    {
        id: 26,
        letterCap: 'z',
        letterLow: 'z',
        pronounciation: ['zuh'], //! Need to fix pro
        color: green

    },

]

const handleLetterClick = (e: any) => {
   textToSpeech(e.target.value, 1);

}

const handlePronounciationClick = (e: any) => {
    textToSpeech(e.target.value, 1.2)
}

const textToSpeech = (letter: any, rate: number) => {
    const utterance = new SpeechSynthesisUtterance(letter)

    utterance.volume = 1; // From 0 to 1
    utterance.rate = rate;   // From 0.1 to 10
    utterance.pitch = 1;  // From 0 to 2
    utterance.lang = 'en-US'; // Set language

    window.speechSynthesis.speak(utterance);
}

const AlphabetCard = () => {
    return (
        <>
        <Container>
            <Grid2 container direction='row'>
            {
                alphabet.map((letter) => (
                    <Paper key={letter.id} sx={{width: 300, m: 3}}>
                        <Grid2 container spacing={2} direction="row" justifyContent="center" alignItems="center" >
                            <Grid2 display="flex">
                                <Button variant='contained' sx={{fontSize: '8em', fontWeight: 'bold', margin: 1, height: 150, width: 150, background: letter.color}} value={letter.letterCap} onClick={handleLetterClick}>{letter.letterCap}</Button>
                                <Button variant='contained' sx={{fontSize: '8em', fontWeight: 'bold', margin: 1, height: 150, width: 150, background: letter.color, textTransform: 'none'}} value={letter.letterLow} onClick={handleLetterClick}>{letter.letterLow}</Button>
                            </Grid2>
                        </Grid2>
                        {
                        letter.pronounciation.map((sound, index) => (
                            <Button key={index} variant='contained' sx={{ fontWeight: 'bold', margin: 1, background: letter.color}} value={sound} onClick={handlePronounciationClick}><FontAwesomeIcon icon={faVolumeHigh} style={{marginRight: 5}}/>pronounce</Button>
                        ))
                        }
                    </Paper>
                ))
            }
            </Grid2>
        </Container>
        </>
    )
}

const Alphabet = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Alphabet</Typography>
            </Box>
            <AlphabetCard />
        </Container>
    )
}

export default Alphabet