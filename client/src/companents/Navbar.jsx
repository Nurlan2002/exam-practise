import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Security services
                    </Typography>
      
                    <Button style={{ marginRight: '10px' }} variant="outlined" color="error"><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link></Button>
                    <Button style={{ marginRight: '10px' }} variant="outlined" color="error"><Link style={{ textDecoration: 'none', color: 'white' }} to='/artists'>Artists</Link></Button>
                    <Button variant="outlined" color="error"><Link style={{ textDecoration: 'none', color: 'white' }} to='/add-artist'>Add Artist</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar