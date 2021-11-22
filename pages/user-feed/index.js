import { Fragment, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/Auth/auth-context';
import PostForm from '../../components/Forms/PostForm';

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
    if (!isLoggedIn) {
      router.push('/auth/login');
    }
  });

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        sx={{
          padding: '10px',
        }}
      >
        <PostForm />
      </Container>
      <Container
        sx={{
          width: '30%',
        }}
      >
        <Typography>Hello</Typography>
      </Container>
    </Container>
  );
};

export default UserFeed;
