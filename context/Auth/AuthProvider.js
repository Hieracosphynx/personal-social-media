import { useState, useEffect, useCallback } from 'react';
import AuthContext from './auth-context';

let logoutTimer;

const calculateExpiration = (expiresIn) => {
  const currentTime = new Date().getTime();
  const remainingTime = expiresIn - currentTime;

  return remainingTime;
};

const retrieveAccessToken = () => {
  const token = localStorage.getItem('access_token');
  const duration = localStorage.getItem('expiresIn');
  const remainingTime = calculateExpiration(duration);
  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    return null;
  }
  return {
    token,
    expiresIn: remainingTime,
  };
};

const AuthProvider = (props) => {
  const [authToken, setAuthToken] = useState(null);

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

      const { status, message, token, expiresIn } = await res.json();

      if (token) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('expiresIn', expiresIn);

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

  const logoutHandler = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiresIn');
    setAuthToken(null);
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    let tokenData = retrieveAccessToken();
    if (tokenData) {
      let initialToken = tokenData.token;
      setAuthToken(initialToken);
      logoutTimer = setTimeout(logoutHandler, tokenData.expiresIn);
    }
  }, [logoutHandler]);

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
