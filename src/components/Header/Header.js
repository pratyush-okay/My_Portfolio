// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h3" className='font_header'>
        <Link className='left-link nav-link' to="/">home</Link>
        <Link className='center-link nav-link' to="/about">about</Link>
        <Link className='right-link nav-link' to="/projects">projects</Link>


        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
