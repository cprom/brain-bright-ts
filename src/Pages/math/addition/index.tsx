import React from 'react'
import { useAuth } from '../../../contexts/authContext'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'
import ProblemSets from './problem-sets'

const Addition = () => {
    const { userLoggedIn } = useAuth();



    return (
        <div>
        { 
            userLoggedIn
            ?       
            <Box style={{justifyItems: 'center'}}>
            <Typography sx={{mt: 1}}>Addition</Typography>
            <ProblemSets />
            </Box>
            :
            <Navigate to="/login"/>  
        }
        </div>

    )
}

export default Addition