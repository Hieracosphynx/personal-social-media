import { useState } from 'react';

const Auth = () => {
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
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error('Fatal error');
      }
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
