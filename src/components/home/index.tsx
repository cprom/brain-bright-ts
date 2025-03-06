import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box } from '@mui/material'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <>
        <Box sx={{p:5}}>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</Box>
        </>
    )
}

export default Home