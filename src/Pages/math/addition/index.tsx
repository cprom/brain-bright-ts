import { Box,Container,Typography } from '@mui/material'
import ProblemSets from './problem-sets'

const Addition = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Addition</Typography>
            <ProblemSets />
            </Box>
        </Container>

    )
}

export default Addition
