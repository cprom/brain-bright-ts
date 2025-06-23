import { Box, Container, Typography } from "@mui/material"
import ComingSoon from "../../components/coming_soon"

const Sentences = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Sentences</Typography>
            </Box>
            <ComingSoon />
        </Container>
    )
}

export default Sentences