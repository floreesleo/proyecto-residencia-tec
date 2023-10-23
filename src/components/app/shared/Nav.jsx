import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAustralSign } from "@fortawesome/free-solid-svg-icons";

import "./../../../assets/css/nav.css";

import { UserAuth } from "../../../context/AuthContext";

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

            {admin == true ? (
              <>
                <Nav.Link as={Link} to="/administrador" className="texto">
                  Administrador
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/sesion" className="texto">
                  Documentos
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
