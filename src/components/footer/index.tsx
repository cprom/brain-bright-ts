import { Box, Container, IconButton} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
        <Box sx={{p:5, mt: 5}}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                '& > *': {
                m: 1,p: 1
                },
            }}
            >
             <IconButton href='https://github.com/cprom/brain-bright-ts' target='blank'>
                <GitHubIcon sx={{fontSize: 40, color:'#ffff' }}/>
             </IconButton>
             <IconButton href='https://www.linkedin.com/in/chenprom' target='blank'>
                <LinkedInIcon sx={{fontSize: 40, color:'#ffff'}}/>
             </IconButton>
            </Box>
        </Box>
        </Container>
    )
}

export default Footer