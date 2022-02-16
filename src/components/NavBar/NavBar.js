import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "../../icon/CartIcon";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar bg="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={require("./BrandLogo.png")}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/" className="navBarElement">
                Home
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <br />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  className="navBarElementNavDropdown"
                  to="category/escaners"
                >
                  <Container fluid>Escaners</Container>
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className="navBarElementNavDropdown"
                  to="category/impresoras"
                >
                  <Container fluid>Impresoras</Container>
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className="navBarElementNavDropdown"
                  to="category/destructoras"
                >
                  <Container fluid>Destructoras</Container>
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavBar;
