import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

const Title = () => {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
            <div>
            <FontAwesomeIcon icon={faBrain} style={{color: '#FFD43B', fontSize: '4rem'}}/>
            <FontAwesomeIcon icon={faLightbulb} style={{color: "#63E6bE", fontSize:'4rem'}} />
            </div>
           <div>
           <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#FFD43B',
                            textDecoration: 'none',
                            fontSize: '2rem'
                            }}
                        >
                            Brain
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#63E6bE',
                            textDecoration: 'none',
                            fontSize: '2rem'
                            }}
                        >
                            Bright
                        </Typography>
           </div>
        </Grid>
    )
}

export default Title