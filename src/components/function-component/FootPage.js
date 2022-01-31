import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const FootPage = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg"fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">polola</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Soporte</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Escaners</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Impresion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Destructoras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                SoftWare
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
    
      </Container>
      
    </Navbar>
  );
};

export default FootPage;