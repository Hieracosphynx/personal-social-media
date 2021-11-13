import { useContext } from 'react';
import AuthContext from '../../context/Auth/auth-context';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  const { logout, isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Simple
          </Typography>
          {isLoggedIn ? (
            <Button color='inherit' onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color='inherit'>Login</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
