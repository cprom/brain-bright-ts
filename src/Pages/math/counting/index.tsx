import { Box,Button,Card,CardActions,CardContent,CardMedia,Container,Grid2,Typography } from '@mui/material'
import counting from '../../../assets/img/counting.jpg'

const subjects = [


    {
        id: 1,
        name: "Counting In Order",
        description: "Practice counting.",
        path: '#/math/counting/sequential',
        img: counting
    },
    {
        id: 2,
        name: "Counting Practice",
        description: "Practice random counting problems.",
        path: '#/math/counting/practice',
        img: counting
    }
]

const Counting = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
            <Box sx={{p:5, mt: 5}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Counting</Typography>
            </Box>
            <Grid2
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
            </Grid2>
        </Container>
    )
}

export default Counting