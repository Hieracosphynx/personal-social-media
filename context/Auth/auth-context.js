import { createContext } from 'react';

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLoggedIn: Boolean,
});

export default AuthContext;
