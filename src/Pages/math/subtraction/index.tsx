import { Box, Container, Typography } from '@mui/material'
import ProblemSets from './problem-sets'

import { Navigate } from 'react-router-dom'

import { useAuth } from '../../../contexts/authContext'

const Subtraction = () => {
     const { userLoggedIn } : any = useAuth()

    return (
        <>
        {
            userLoggedIn
            ?
            <Container sx={{textAlign: 'center'}}>
            <Box sx={{p:5, mt: 5}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Subtraction</Typography>
            </Box>
            <ProblemSets/>
        </Container>
        :
        <Navigate to="/login" />
        }
        </>
    )
}

export default Subtraction