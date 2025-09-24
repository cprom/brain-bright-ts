import { Box, Button, Container, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import addition from '../../assets/img/addition.jpg'
import subtraction from '../../assets/img/subtraction.jpg'
import multiplication from '../../assets/img/multiplication.jpg'
import division from '../../assets/img/division.jpg'
import counting from '../../assets/img/counting.jpg'
import little_boy_pointing from '../../assets/img/little_boy_pointing.png'

const subjects = [
    {
        id: 1,
        name: "Counting",
        description: 'Practice Counting',
        path: '#/math/counting',
        img: counting

    },
    {
        id: 2,
        name: "Addition",
        description: 'Practice Addition',
        path: '#/math/addition',
        img: addition

    },
    {
        id: 3,
        name: "Subtraction",
        description: 'Practice Subtraction',
        path: '#/math/subtraction',
        img: subtraction

    },
    {
        id: 4,
        name: "Multiplication",
        description: 'Practice Multiplication',
        path: '#/math/multiplication',
        img: multiplication

    },
    {
        id: 5,
        name: "Division",
        description: 'Practice Division',
        path: '#/math/division',
        img: division

    },
]

const Math = () => {
   
    return (
        <Container sx={{textAlign: 'center'}}>
            <Box sx={{p:5, mt: 5}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Math</Typography>
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
                <Card sx={{ maxWidth: 345, minWidth:246.36, textAlign: 'center' }} key={subject.id}>
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
                    <Button className='button-hover-green' variant='contained' size='large' color="primary" href={subject.path} sx={{fontSize: '1rem'}} fullWidth >Start</Button>
                    </CardActions>
                </Card>
                ) )
               }  
            </Grid>
            <img src={little_boy_pointing} style={{maxWidth: '100%', padding: 0, margin: 0, width: '20%'}} alt='little boy pointing'/>
    </Container>
    )
}

export default Math