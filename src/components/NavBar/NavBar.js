import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "../../icon/CartIcon";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const activeStyle = {
    color: "red",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">AVS Digital</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/item"
              >
                Item
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#link">Soporte</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  to="category/escaners"
                  className={(isActive) =>
                    isActive ? "activeClass" : "noActiveClass"
                  }
                >
                  Escaners
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="category/impresoras"
                  className={(isActive) =>
                    isActive ? "activeClass" : "noActiveClass"
                  }
                >
                  Impresoras
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="category/destructoras"
                  className={(isActive) =>
                    isActive ? "activeClass" : "noActiveClass"
                  }
                >
                  Destructoras
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">SoftWare</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
      </Container>
    </Navbar>
  );
};

export default NavBar;
