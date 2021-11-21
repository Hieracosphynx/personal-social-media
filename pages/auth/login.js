import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/Auth/auth-context';
import LoginForm from '../../components/Forms/LoginForm';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Auth = () => {
  return (
    <Box
      minHeight='95vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      sx={{
        minwidth: '100%',
      }}
    >
      <Card
        sx={{
          padding: '10px',
          minHeight: '30vh',
          minWidth: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardContent
          color='secondary'
          sx={{
            minWidth: '100%',
          }}
        >
          <Typography variant='h3' color='primary'>
            Simple
          </Typography>
          <LoginForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Auth;
