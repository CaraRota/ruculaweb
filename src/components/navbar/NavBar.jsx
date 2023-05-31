import React from 'react';
import "../../css/NavBar.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

function NavBar({ title }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='navbar' position="static">
                <Toolbar className='title'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <SmartToyOutlinedIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar