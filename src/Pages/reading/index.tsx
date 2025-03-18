import { Box, Container, Typography } from '@mui/material'
import ComingSoon from '../../components/coming_soon'

const Reading = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
            <Box sx={{p:5, mt: 5}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Reading</Typography>
            </Box>
            <ComingSoon/>
        </Container>
    )
}

export default Reading