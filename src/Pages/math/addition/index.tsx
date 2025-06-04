import { Box,Container,Typography } from '@mui/material'
import ProblemSets from './problem-sets'

import { Navigate } from 'react-router-dom'

import { useAuth } from '../../../contexts/authContext'

const Addition = () => {

    const { userLoggedIn } : any = useAuth()

    return (
        <>
        {
            userLoggedIn
            ?
            <Container sx={{textAlign: 'center'}}>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Addition</Typography>
            <ProblemSets />
            </Box>
        </Container>
        :
        <Navigate to="/login"/>
        }
        </>

    )
}

export default Addition
