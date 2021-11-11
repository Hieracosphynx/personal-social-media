import { useState } from 'react';
const Register = () => {
  const [user, setUser] = useState({
    email: '',
    name: '',
    password: '',
  });

  const { email, name, password } = user;

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }

      console.log(res);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='email'
        name='email'
        value={email}
        onChange={onChangeHandler}
      />
      <input type='text' name='name' value={name} onChange={onChangeHandler} />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChangeHandler}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Register;
