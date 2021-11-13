import AuthContext from './auth-context';

const AuthProvider = (props) => {
  const login = async (userCredentials) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      if (!res.ok) {
        throw new Error('Fatal error');
      }

      const data = await res.json();
      console.log('goods');
      localStorage.setItem('access_token', data.token);
    } catch (err) {
      console.error(err.message);
      return {
        status: 401,
        message: 'Unauthorized',
      };
    }
  };

  const authValue = {
    login,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
