import { useState, useEffect } from 'react';
import AuthContext from './auth-context';

const retrieveAccessToken = () => {
  const token = localStorage.getItem('access_token');
  if (!token) {
    return null;
  }
  return {
    token,
  };
};

const AuthProvider = (props) => {
  // let tokenData = retrieveAccessToken();
  // let initialToken = null;
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    let tokenData = retrieveAccessToken();
    if (tokenData) {
      let initialToken = tokenData.token;
      setAuthToken(initialToken);
    }
  }, []);

  const isLoggedIn = !!authToken;

  const loginHandler = async (userCredentials) => {
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

      const { status, message, token } = await res.json();

      if (token) {
        localStorage.setItem('access_token', token);
        setAuthToken(token);
        isLoggedIn = true;
      }

      return {
        status,
        message,
      };
    } catch (err) {
      console.error(err.message);
      return {
        status: 500,
        message: 'Server errror',
      };
    }
  };

  const logoutHandler = () => {
    if (isLoggedIn) {
      localStorage.removeItem('access_token');
      setAuthToken(null);
      isLoggedIn = false;
    }
  };

  const authValue = {
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
