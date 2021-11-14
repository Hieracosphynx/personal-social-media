import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/Auth/auth-context';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Auth = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await authCtx.login(user);
      if (res.status === 200) {
        router.push('/');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

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
          minWidth: '70%',
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
          <form onSubmit={onSubmitHandler}>
            <FormGroup>
              <FormControl color='secondary'>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input
                  type='email'
                  name='email'
                  value={user.email}
                  onChange={onChangeHandler}
                />
              </FormControl>
              <FormControl color='secondary'>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input
                  type='password'
                  name='password'
                  value={user.password}
                  onChange={onChangeHandler}
                />
              </FormControl>
              <FormHelperText>Do not share your password!</FormHelperText>
              <Button type='submit'>Login</Button>
            </FormGroup>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Auth;
