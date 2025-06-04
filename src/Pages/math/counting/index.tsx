import { Box, Container, Typography } from '@mui/material'
import ComingSoon from '../../../components/coming_soon'

import { Navigate } from 'react-router-dom'

import { useAuth } from '../../../contexts/authContext'

const Counting = () => {

    const { userLoggedIn } : any = useAuth()

    return (
        <>
        {
            userLoggedIn
            ?
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{p:5, mt: 5}}>
                <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Counting</Typography>
                </Box>
                <ComingSoon/>
            </Container>
            :
            <Navigate to="/login" />
        }
        </>
    )
}

export default Counting