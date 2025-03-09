import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Navigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    const { userLoggedIn } = useAuth();

    return (
        <div>
        { 
            userLoggedIn
            ?
            <>
            <Card sx={{ mt: 5, p: 10,minWidth: 275, minHeight: 300 }}>
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
            </>
            :
            <Navigate to="/login"/>  
        }
        </div>

    )
}

export default Home