import { Box, Button, Container, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import division from '../../../assets/img/division.jpg'
import divisionTable from '../../../assets/img/divisionTable.png'

const subjects = [
    {
        id: 1,
        name: "Random Practice",
        description: "Random problems.",
        path: '#/math/division/practice',
        img: division
    },
    {
        id: 2,
        name: "Division Tables",
        description: "Practice the Division Tables.",
        path: '#/math/division/table',
        img: divisionTable
    }
]

const Division = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
            <Box sx={{p:5, mt: 5}}>
            <Typography sx={{fontSize: '2rem', fontWeight: 'bold'}}>Division</Typography>
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
                <Card sx={{ maxWidth: 345, textAlign: 'center' }} key={subject.id}>
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

export default Division