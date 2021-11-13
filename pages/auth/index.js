import { useState, useContext } from 'react';
import AuthContext from '../../context/Auth/auth-context';

const Auth = () => {
  const authCtx = useContext(AuthContext);
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
      authCtx.login(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='email'
        name='email'
        value={user.email}
        onChange={onChangeHandler}
      />
      <input
        type='password'
        name='password'
        value={user.password}
        onChange={onChangeHandler}
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Auth;
