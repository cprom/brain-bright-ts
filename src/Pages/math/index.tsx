import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box } from '@mui/material'
import { Navigate } from 'react-router-dom'

const Math = () => {
    const { userLoggedIn } = useAuth();
    return (
        <div>
        { 
            userLoggedIn
            ?
            <>

            <Box sx={{p:5}}>
            <h1>Math</h1>
            </Box>
            </>
            :
            <Navigate to="/login"/>  
        }
    </div>

    )
}

export default Math