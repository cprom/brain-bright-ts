import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../../../App.css'
import Title from '../../../components/title'
import Stack from '@mui/material/Stack';

const Login = () => {
    const { userLoggedIn } : any = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage] = useState('')

    const onSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        >
            <Stack spacing={5}>
            {userLoggedIn && (<Navigate to={'/brain-bright-ts'} replace={true} />)}
            <Title/>

            <Card sx={{ width: 300, mt: 20, p: 5 }}>
                <CardContent>
                  <Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 18, p: 1 }}>
                            Welcome Back
                    </Typography>
                    <form
                        onSubmit={onSubmit}
                        
                    >
                        <div>
                        <TextField
                            type="email"
                            label="Email"
                            required
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                            fullWidth
                            sx={{mb: 1}}
                        />

                        <TextField
                            type="password"
                            required
                            label="Password"
                            value={password} onChange={(e) => { setPassword(e.target.value) }}
                            fullWidth
                            sx={{mb: 1}}
                        />

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <Button
                            variant='contained'
                            color='primary'
                            type="submit"
                            disabled={isSigningIn}
                            fullWidth
                            className='button-hover-green'
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </Button>
                        </div>
                    </form>
                    <Typography sx={{mt: 2}} >Don't have an account? <Link to={'/register'}>Register</Link></Typography>
                  </Box>
                </CardContent>
            </Card>
        </Stack>
        </Grid>
    )
}

export default Login