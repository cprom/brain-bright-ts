import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import { doSignInAnonymously } from '../../../firebase/auth'
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Title from '../../../components/title'
import Stack from '@mui/material/Stack';
import backgroundImage from '../../../assets/img/backgound2.jpg'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage] = useState('')

    const { userLoggedIn }: any = useAuth()

    const onSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
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
            {userLoggedIn && (<Navigate to={'/brain-bright-ts/home'} replace={true} />)}
        <Title />
            <Card sx={{ width: 300, mt: 20, p: 5, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <CardContent className='glass-morphism'>
                <Box>
            <main >
                <div>
                    <div>
                        <div>
                            <Typography>Create a New Account</Typography>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <TextField
                                type="email"
                                label="Email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                fullWidth
                                sx={{mb: 1}}
                            />
                      
                            <TextField
                                disabled={isRegistering}
                                type="password"
                                label="Password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                fullWidth
                                sx={{mb: 1}}
                            />
                       
                            <TextField
                                disabled={isRegistering}
                                type="password"
                                label="Confirm Password"
                                autoComplete='off'
                                required
                                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                fullWidth
                                sx={{mb: 1}}
                            />

                        <Button
                            variant='contained'
                            color='primary'
                            type="submit"
                            disabled={isRegistering}
                            fullWidth
                            className='button-hover-green'
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </Button>
                        </div>

                        {errorMessage && (
                            <span>{errorMessage}</span>
                        )}
                        <Typography sx={{mt: 2}}>
                            Already have an account? {'   '}
                            <Link to={'/login'}>Sign In</Link>
                        </Typography>
                    </form>
                </div>
            </main>
            <Button sx={{mt: 2, fontSize: 13}} onClick={doSignInAnonymously} variant='contained' color='secondary'> Continue as Guest</Button>

            </Box>
            </CardContent>
            </Card>
            </Stack>
        </Grid>
    )
}

export default Register