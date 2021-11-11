import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Layout from '../components/Layouts/Layout';
import theme from '../src/theme';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
