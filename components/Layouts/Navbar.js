import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthContext from '../../context/Auth/auth-context';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  const { logout, isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Box sx={{ height: '5vh', flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
            }}
          >
            <Link
              href='/'
              sx={{
                ':hover': {
                  cursor: 'pointer',
                },
              }}
            >
              Simple
            </Link>
          </Typography>
          {isLoggedIn ? (
            <Button color='inherit' onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color='inherit' onClick={() => router.push('/auth/login')}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
