import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import kidsBackgroundImage3D from '../../assets/img/kids_in_a_circle.png'

const Home = () => {


    return (
        <Container sx={{textAlign: 'center'}}>
            <Box sx={{ mt: 10, p: 5, minHeight: 300 }}   style={{
                backgroundImage: `url(${kidsBackgroundImage3D})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5",
                backgroundPosition: 'center'}}>
                <div style={{marginBottom: 100}}>
                    <Typography className='outline-letter' gutterBottom sx={{ color: '#63E6bE', fontSize: 70, fontWeight: 'bolder'}}>
                    Welcome to Brain Bright.  Learn, Grow, Have Fun.
                    </Typography>
                </div>
                </Box>
        </Container>
    )
}

export default Home