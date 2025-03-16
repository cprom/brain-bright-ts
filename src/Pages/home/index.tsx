import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = () => {


    return (
        <div>
        
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

        </div>

    )
}

export default Home