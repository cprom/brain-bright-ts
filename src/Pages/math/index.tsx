import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box, Button, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid2';
import addition from '../../assets/img/addition.jpg'
import subtraction from '../../assets/img/subtraction.jpg'
import multiplication from '../../assets/img/multiplication.jpg'
import division from '../../assets/img/division.jpg'
import counting from '../../assets/img/counting.jpg'

const subjects = [
    {
        id: 1,
        name: "Counting",
        description: 'Learn to Count',
        path: '/math/counting',
        img: counting

    },
    {
        id: 2,
        name: "Addition",
        description: 'Learn to Add',
        path: '/math/addition',
        img: addition

    },
    {
        id: 3,
        name: "Subtraction",
        description: 'Learn to Subtract',
        path: '/math/subtraction',
        img: subtraction

    },
    {
        id: 4,
        name: "Multiplication",
        description: 'Learn to Multiply',
        path: '/math/multiplication',
        img: multiplication

    },
    {
        id: 5,
        name: "Division",
        description: 'Learn to Divide',
        path: '/math/division',
        img: division

    },
]

const Math = () => {
    const { userLoggedIn } = useAuth();

   

    return (
        <div>
        { 
            userLoggedIn
            ?
            <>
            
            <Box sx={{p:5}}>
            <Typography><h1>Math</h1></Typography>
            </Box>
            <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
            >
               {
                 subjects.map((subject)=>(
                <Card sx={{ maxWidth: 345 }} key={subject.id}>
                    <CardMedia
                        component="img"
                        alt={subject.name}
                        height="140"
                        image={subject.img}
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {subject.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {subject.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button className='button-hover-green' variant='contained' size='large' color="primary" href={subject.path} sx={{fontSize: '1rem'}}>Start Learning</Button>
                    </CardActions>
                </Card>
                ) )
               }  
            </Grid>
            </>
            :
            <Navigate to="/login"/>  
        }
    </div>

    )
}

export default Math