import { Card, Form, Button, Container, Accordion } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function AgregarAgremiado() {
  return (
    <>
      <Container className="mt-3">
        <Button
          variant="outline-primary"
          as={Link}
          to="/administrador"
          className="w-100"
          style={{ fontSize: "16px" }}
        >
          Regresar
        </Button>
        <Card className="mt-3">
          <Card.Body>
            <h1 className="text-center mb-4">
              Agregar agremiado a la aplicación
            </h1>

            {/* Formulario de SignUp */}
            <Form>
              {/* Nombre del agremiado */}
              <Form.Group>
                <Form.Label>
                  Nombre completo del agremiado del agremiado
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan Carlos Torres Lopez"
                />
              </Form.Group>

              <hr />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Redes sociales (opcional)</Accordion.Header>
                  <Accordion.Body>
                    {/* Facebook */}
                    <Form.Group>
                      <Form.Label>Facebook</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="URL del Facebook"
                      />
                    </Form.Group>

                    {/* Instagram */}
                    <Form.Group>
                      <Form.Label>Instagram</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="URL de Instagram"
                      />
                    </Form.Group>

                    {/* Twitter */}
                    <Form.Group>
                      <Form.Label>Twitter</Form.Label>
                      <Form.Control type="text" placeholder="URL de Twitter" />
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Botón Submit */}
              <Form.Group>
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Agregar datos del agremiado
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
