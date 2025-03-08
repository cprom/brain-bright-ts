import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box } from '@mui/material'

const Reading = () => {
    const { currentUser } = useAuth()
    return (
        <>
        <Box sx={{p:5}}>
        <h1>Reading</h1>
            {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.

        </Box>
        </>
    )
}

export default Reading