import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    return (
        <Grid container justifyContent="center">
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <Card sx={{ width: 300, mt: 20, p: 5 }}>
                <CardContent>
                  <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"

                  >
                    <Typography sx={{ fontWeight: 'bold', fontSize: 18, p: 1 }}>
                            Welcome Back
                    </Typography>
                    <form
                        onSubmit={onSubmit}
                        
                    >
                        <Grid 
                            container
                            spacing={1}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                        <TextField
                            type="email"
                            label="Email"
                            required
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                            fullWidth
                        />

                        <TextField
                            type="password"
                            required
                            label="Password"
                            value={password} onChange={(e) => { setPassword(e.target.value) }}
                            fullWidth
                        />

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <Button
                            variant='contained'
                            type="submit"
                            disabled={isSigningIn}
                            fullWidth
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </Button>
                        </Grid>
                    </form>
                    <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
                    <div className='flex flex-row text-center w-full'>
                        <div className='border-b-2 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-2 mb-2.5 ml-2 w-full'></div>
                    </div>
                  </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Login