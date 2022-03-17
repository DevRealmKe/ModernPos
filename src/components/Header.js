import { Button, Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar style={{ background: '#f2f2f2' }}>
        <Container>
          My Website <a href="/">Home</a>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
