import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/Auth/auth-context';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const UserFeed = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  /**
   * I want to verify the token if the user is logged in.
   * For testing purposes, I will use isLoggedIn to verify;
   * This is a BAD IDEA and SHOULD NEVER BE USED IN PRODUCTION.
   */

  useEffect(() => {
    console.log(!isLoggedIn);
    if (!isLoggedIn) {
      router.push('/auth/login');
    }
  });

  return (
    <Container>
      <Typography variant='h3'>Post something!</Typography>
    </Container>
  );
};

export default UserFeed;
