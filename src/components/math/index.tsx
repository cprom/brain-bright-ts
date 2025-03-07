import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Box } from '@mui/material'

const Math = () => {
    const { currentUser } = useAuth()
    return (
        <>
        <Box sx={{p:5}}>
            <h1>Math</h1>
        </Box>
        </>
    )
}

export default Math