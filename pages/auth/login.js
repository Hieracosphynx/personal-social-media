import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../../context/Auth/auth-context';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
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
    <Card>
      <CardContent>
        <form onSubmit={onSubmitHandler}>
          <FormControl color='primary'>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input
              type='email'
              name='email'
              value={user.email}
              onChange={onChangeHandler}
            />
          </FormControl>
          <FormControl>
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
        </form>
      </CardContent>
    </Card>
  );
};

export default Auth;
