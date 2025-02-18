import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row"  sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '20px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="/start" style={{ textDecoration: 'none', color: '#3A1212' }}>YogaPose</a>
    </Stack>
  </Stack>
);

export default Navbar;
