import Navbar from './Navbar';
import Container from '@mui/material/Container';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Container
        component='main'
        sx={{
          height: '95vh',
        }}
      >
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
