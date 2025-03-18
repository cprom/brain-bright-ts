import { Box, Button, ButtonGroup, Container, IconButton} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const buttons = [
    <Button key="one">GitHub</Button>,
  ];

const Footer = () => {

    return (
        <Container sx={{textAlign: 'center'}}>
        <Box sx={{p:5, mt: 5}}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 1,p: 1
                },
            }}
            >
             <IconButton href='https://github.com/cprom/brain-bright-ts' target='blank'>
                <GitHubIcon sx={{fontSize: 40, color:'#74C0FC' }}/>
             </IconButton>
            </Box>
        </Box>
        </Container>
    )
}

export default Footer