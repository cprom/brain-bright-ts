import React from 'react'
import { useAuth } from '../../../contexts/authContext'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'

const Division = () => {
    const { userLoggedIn } = useAuth();



    return (
        <div>
        { 
            userLoggedIn
            ?
            <>

            <Box sx={{p:5}}>
            <Typography>Division</Typography>
            </Box>
            </>
            :
            <Navigate to="/login"/>  
        }
    </div>

    )
}

export default Division