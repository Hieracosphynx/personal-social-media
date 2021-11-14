import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AuthProvider from '../context/Auth/AuthProvider';
import Layout from '../components/Layouts/Layout';
import theme from '../src/theme';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
