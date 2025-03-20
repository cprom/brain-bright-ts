import { Box, Container, Typography } from '@mui/material'
import ProblemSets from './problem-sets'

const Division = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
            <Box sx={{p:5, mt: 5}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Division</Typography>
            </Box>
            <ProblemSets/>
        </Container>
    )
}

export default Division