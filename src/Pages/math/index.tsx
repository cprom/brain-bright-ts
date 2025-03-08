import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box } from '@mui/material'

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
            "Please Login"
        }
    </div>

    )
}

export default Math