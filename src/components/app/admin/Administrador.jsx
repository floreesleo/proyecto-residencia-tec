// Bootstrap
import { Container, Button, Card, Accordion } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

export default function Administrador() {
  return (
    <>
      <Container className="text-center mt-3">
        <h1>Administrador | Colegio de arquitectos de Comitán</h1>
        <Card>
          <Card.Body>
            <Accordion>
              <Accordion.Item
                eventKey="0"
                style={{ backgroundColor: "#bdc3c7" }}
              >
                <Accordion.Header>Publicaciones</Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant="primary"
                    as={Link}
                    to="/crear-publicacion"
                    className="w-100"
                    style={{ fontSize: "16px" }}
                  >
                    Gestor de publicaciones
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                style={{ backgroundColor: "#bdc3c7" }}
              >
                <Accordion.Header>Agremiados</Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant="primary"
                    as={Link}
                    to="/registrar-agremiado"
                    className="mt-2 w-100"
                    style={{ fontSize: "16px" }}
                  >
                    Registrar agremiado al gestor de documentos
                  </Button>
                  <br />
                  <Button
                    variant="success"
                    as={Link}
                    to="/agregar-agremiado"
                    className="mt-2 w-100"
                    style={{ fontSize: "16px" }}
                  >
                    Agregar agremiado a la aplicación
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                style={{ backgroundColor: "#bdc3c7" }}
              >
                <Accordion.Header>Aplicación</Accordion.Header>
                <Accordion.Body>
                  <Button
                    variant="primary"
                    as={Link}
                    to="/datos-colegio"
                    className="mt-2 w-100"
                    style={{ fontSize: "16px" }}
                  >
                    Editar datos del colegio
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr />
            <Button variant="link" as={Link} to="/perfil" className="w-100">
              Perfil
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
