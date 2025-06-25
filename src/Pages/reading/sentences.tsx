import { Box, Container, Typography } from "@mui/material"
import ComingSoon from "../../components/coming_soon"
import { useAuth } from "../../contexts/authContext"
import { Navigate } from "react-router-dom"

const Sentences = () => {

    const { userLoggedIn } : any = useAuth()

    return (
        <>
        {
            userLoggedIn
            ?
            <Container sx={{textAlign: 'center'}}>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Sentences</Typography>
            </Box>
            <ComingSoon />
        </Container>
        : 
        <Navigate to="/login" />
        }
        </>
    )
}

export default Sentences