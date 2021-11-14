import Navbar from './Navbar';
import Container from '@mui/material/Container';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          marginTop: '5px',
        }}
      >
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
