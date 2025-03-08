import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box, Button } from '@mui/material'
import { Navigate } from 'react-router-dom'

const Home = () => {
    const { userLoggedIn } = useAuth();

    return (
        <div>
        { 
            userLoggedIn
            ?
            <>

            <Box sx={{p:5}}>
            <h1>Home</h1>
            </Box>
            </>
            :
            <Navigate to="/login"/>  
        }
        </div>

    )
}

export default Home