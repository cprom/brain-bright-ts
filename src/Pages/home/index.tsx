import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Navigate } from 'react-router-dom'

import { useAuth } from '../../contexts/authContext'

const Home = () => {
    
    const { userLoggedIn } : any = useAuth()

    return (
       <>
        {
            userLoggedIn
            ?
            <Container sx={{textAlign: 'center'}}>
            <Card sx={{ mt: 10, p: 5, minHeight: 300 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 50 }}>
                    Welcome to Brain Bright.
                    </Typography>
                    <Typography sx={{ color: '#B197FC', fontSize: 50 }}>
                        Learn
                    </Typography>
                    <Typography sx={{ color: '#63E6bE', fontSize: 50 }}>
                        Grow
                    </Typography>
                </CardContent>
                </Card>
        </Container>
        :
        <Navigate to="/login"/>
        }</>
    )
}

export default Home