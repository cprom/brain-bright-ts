
import Typography from '@mui/material/Typography';
import kidsBackgroundImage3D from '../../assets/img/kids_in_a_circle_noBackground.png'
import { Box, Button, Grid2, ListItem } from '@mui/material';

import CalculateIcon from '@mui/icons-material/Calculate';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DrawIcon from '@mui/icons-material/Draw';


const Home = () => {


    return (
        <>
            <div style={{marginTop: 100, textAlign: 'center'}}>
                <Typography className='outline-letter' gutterBottom sx={{ color: '#B197FC', fontSize: 50, fontWeight: 'bolder'}}>
                Welcome to <span style={{color: '#FFD43B'}}>Brain</span> <span style={{color:'#63E6bE'}}>Bright</span>.  <span style={{color:'#FFA047'}}>Practice</span>, <span style={{color:"#FF6161"}}>Grow</span>, Have <span style={{color: '#74C0FC'}}>Fun</span>.
                </Typography>
            </div>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className='gradient' sx={{ borderRadius: 5, justifyContent: 'space-evenly', maxWidth: 1450}} >
            <Grid2 size={{xs: 4, sm: 4, md: 8}}>
                <ListItem><img src={kidsBackgroundImage3D} style={{maxWidth: '100%', height:'auto', borderRadius: '50%'}} className=''/></ListItem>
                </Grid2>
                <Grid2  size={{xs: 4, sm: 4, md: 4 }} sx={{p: 2}} >
                    <ListItem   className='box-shadow'>
                        <Box sx={{p:2, width: 390}}>
                            <Typography style={{fontSize: '1.5em', color: 'black'}}>This project was inspired by my daughters, and aims to support them and other young learners in a fun, interactive, and accessible way.  
                                The platform was designed to support their educational growth and is meant to supplement their learning journey by providing interactive lessons in math, 
                                reading, and writing.
                            </Typography>
                        </Box>
                    </ListItem>
                    <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}  spacing={ 1 } sx={{display: 'flex',justifyContent: 'center', maxWidth: 1450, mt: 2}}>
                    <Button href='#/math' sx={{width: 390, height: 100, fontSize: '1.5em', color: 'white'}} variant='contained' color='success'>
                        <CalculateIcon sx={{fontSize:"4em", color: '#B197FC'}} />Math 
                    </Button>
                    <Button href='#/reading' sx={{width: 390, height: 100, fontSize: '1.5em', color: 'white'}} variant='contained' color='success'>
                    <AutoStoriesIcon sx={{fontSize:"4em", color: '#B197FC', p: 2}} />Reading
                    </Button>
                    <Button href='#/writing' sx={{width: 390, height: 100, fontSize: '1.5em', color: 'white'}} variant='contained' color='success'>
                        <DrawIcon sx={{fontSize:"4em", color: '#B197FC', p: 3}} />Writing
                    </Button>
                </Grid2>
                </Grid2>

                </Grid2>
            </Box>
        </>
    )
}

export default Home