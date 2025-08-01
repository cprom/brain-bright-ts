import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faLightbulb, faShieldDog } from '@fortawesome/free-solid-svg-icons';
import CalculateIcon from '@mui/icons-material/Calculate';

const pages = [
    {
        id: 1,
        subject: 'Math',
        path: '#/math',
        icon: `<${CalculateIcon} />}`
    }, 
    {
        id: 2,
        subject: 'Reading',
        path: '#/reading',
        icon: `<${CalculateIcon} />}`
    },
    {
        id: 3,
        subject: 'Writing',
        path: '#/writing',
        icon: `<${CalculateIcon} />}`
    }
];



const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar style={{background: '#B197FC'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Button href='#/'>
                    <FontAwesomeIcon icon={faBrain} style={{color: '#FFD43B', fontSize: '35px'}}/>
                    <FontAwesomeIcon icon={faLightbulb} style={{color: "#63E6bE", fontSize:'35px'}} />
                </Button>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#FFD43B',
                    textDecoration: 'none',
                    }}
                >
                    Brain
                </Typography>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#63E6bE',
                    textDecoration: 'none',
                    }}
                >
                    Bright
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                        <Button
                        key={page.id}
                        onClick={handleCloseNavMenu}
                        sx={{ color: 'white', display: 'block', fontSize: 20, textAlign: 'center' }}
                        href={page.path}
                        variant='contained'
                        fullWidth
                        >
                        {page.subject}
                        </Button>
                        </MenuItem>
                    ))}
                </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page.id}
                        onClick={handleCloseNavMenu}
                        sx={{ m: 1, color: 'white', display: 'block', fontSize: 20}}
                        href={page.path}
                        variant='text'
                        color='success'
                        className='btn-hover'
                    >
                        {page.subject}
                    </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <FontAwesomeIcon icon={faShieldDog} style={{color: '#747474ff', fontSize: '35px'}}/>
                    </IconButton>
                    </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    
                        <MenuItem onClick={handleCloseUserMenu}>
                        {/* <Button
                            className='button-hover-green' 
                            variant="contained" 
                            color='primary'
                            onClick={() => { doSignOut().then(() => { navigate('/login') }) }}>
                            Logout
                        </Button> */}
                        Comming soon
                        </MenuItem>
                
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        </div>
    )
}

export default Header