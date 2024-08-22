import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  const currentPage = useLocation().pathname;
  const { loggedIn, user } = useSelector((state) => state.user);

  return (
    <Navbar
      sticky='top'
      bg='light'
      data-bs-theme='dark'
      expand='lg'
      style={{ borderBottom: "1px solid #adb5bd" }}
    >
      <Container>
        <Navbar.Brand href='/'>
          <img src='src\img\Structural.png' />
        </Navbar.Brand>

        <Nav variant='pills' bg='light' defaultActiveKey={currentPage}>
          <Nav.Item>
            <Nav.Link eventKey='/' href='/'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='/materials' href='/materials'>
              Materials
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='/addnew' href='/addnew'>
              Add new material
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav
          className='ml-auto'
          variant='pills'
          bg='dark'
          defaultActiveKey={currentPage}
        >
          <Nav.Item>
            {!loggedIn && <Nav.Link href='/register'>Register</Nav.Link>}
          </Nav.Item>
          <Nav.Item className='justify-content-end'>
            <Nav.Link href='/login'>
              {loggedIn ? `${user.name}` : "Login"}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
