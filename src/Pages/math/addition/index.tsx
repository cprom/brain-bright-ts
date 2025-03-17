import { Box,Typography } from '@mui/material'
import ProblemSets from './problem-sets'

const Addition = () => {




    return (
        <div>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
            <Typography sx={{mt: 1}}>Addition</Typography>
            <ProblemSets />
            </Box>

        </div>

    )
}

export default Addition