import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import kidsBackgroundImage3D from '../../assets/img/kids_in_a_circle.png'

const Home = () => {


    return (
        
        <>
                <div style={{marginTop: 100, textAlign: 'center'}}>
                    <Typography className='outline-letter' gutterBottom sx={{ color: '#B197FC', fontSize: 50, fontWeight: 'bolder'}}>
                    Welcome to <span style={{color: '#FFD43B'}}>Brain</span> <span style={{color:'#63E6bE'}}>Bright</span>.  <span style={{color:'#FFA047'}}>Learn</span>, <span style={{color:"#FF6161"}}>Grow</span>, Have <span style={{color: '#74C0FC'}}>Fun</span>.
                    </Typography>
                </div>
            <Box sx={{ minHeight: 300, maxWidth: '1000px', textAlign: 'center', margin: 'auto' }}   style={{
                backgroundImage: `url(${kidsBackgroundImage3D})`,
                backgroundSize: "cover",
                height: "80vh",
                color: "#f5f5f5",
                backgroundPosition: 'center'}}>

            </Box>
        </>
        
    )
}

export default Home