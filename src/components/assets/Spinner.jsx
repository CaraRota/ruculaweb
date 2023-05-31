import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Spinner() {
    return (
        <Box>
            <div className='bodyContainerSpinnerContainer'>
            <CircularProgress className='bodyContainerSpinner' />
            </div>
        </Box>
    )
}

export default Spinner