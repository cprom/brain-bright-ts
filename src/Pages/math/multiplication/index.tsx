import { Box, Button, Container, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import multiplicationTable from '../../../assets/img/multiplicationTable.png'
import multiplication from '../../../assets/img/multiplication.jpg'

    const subjects = [

        {
            id: 1,
            name: "Learn Multiplication Tables",
            description: "Tables With Answers.",
            path: '#/math/multiplication/tables',
            img: multiplication
        },
        {
            id: 2,
            name: "Random Practice",
            description: "Random problems.",
            path: '#/math/multiplication/practice',
            img: multiplication
        },
        {
            id: 3,
            name: "Multiplication Tables",
            description: "Practice The Multiplication Tables",
            path: '#/math/multiplication/table',
            img: multiplicationTable
        }

    ]
    
    const Multiplication = () => {
    
        return (
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{p:5, mt: 5}}>
                <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Multiplication</Typography>
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
                    <Card sx={{ maxWidth: 345, minWidth:246.36,  textAlign: 'center' }} key={subject.id}>
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
                        <Button className='button-hover-green' variant='contained' size='large' color="primary" href={subject.path} sx={{fontSize: '1rem'}} fullWidth >Start Learning</Button>
                        </CardActions>
                    </Card>
                    ) )
                   }  
                </Grid>
        </Container>
        )
}

export default Multiplication