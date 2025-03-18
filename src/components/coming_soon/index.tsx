import { Box, Card, CardContent, Container, Typography } from '@mui/material'


const ComingSoon = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
            <Card>
                <CardContent>
                <Box sx={{p:5, mt: 5}}>
                <Typography sx={{fontSize: '3rem', fontWeight: 'bold'}}>Content Coming Soon...</Typography>
                </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ComingSoon