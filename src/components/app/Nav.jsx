import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAustralSign } from "@fortawesome/free-solid-svg-icons";

import "./../../assets/css/nav.css";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navegador">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titulo">
          <FontAwesomeIcon icon={faAustralSign} /> Colegio de arquitectos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto texto">
            <Nav.Link as={Link} to="/" className="texto">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros" className="texto">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/archivos" className="texto">
              Documentos
            </Nav.Link>
            <Nav.Link as={Link} to="/perfil" className="texto">
              Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
