import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box } from '@mui/material'
import { Navigate } from 'react-router-dom'

const Writing = () => {
    const { userLoggedIn } = useAuth();
    return (
        <div>

            <Box sx={{p:5}}>
            <h1>Writing</h1>
            </Box>


    </div>

    )
}

export default Writing