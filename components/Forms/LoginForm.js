import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

const LoginForm = () => {
  return (
    <form onSubmit={onSubmitHandler}>
      <FormGroup>
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
      </FormGroup>
    </form>
  );
};

export default LoginForm;
