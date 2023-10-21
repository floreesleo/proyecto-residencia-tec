import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAustralSign } from "@fortawesome/free-solid-svg-icons";

import "./../../assets/css/nav.css";

import { UserAuth } from "./../../context/AuthContext";

export default function NavBar() {
  const { admin } = UserAuth();

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
            <Nav.Link as={Link} to="/agremiados" className="texto">
              Agremiados
            </Nav.Link>
            <Nav.Link as={Link} to="/sesion" className="texto">
              Documentos
            </Nav.Link>
            {admin == true ? (
              <>
                <NavDropdown
                  title="Administrador"
                  id="basic-nav-dropdown"
                  style={{ color: "#fff" }}
                >
                  <NavDropdown.Item as={Link} to="/add-publicacion">
                    Publicar
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/agremiados">
                    Agremiados
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/registrar-agremiado">
                    Registrar agremiado
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
