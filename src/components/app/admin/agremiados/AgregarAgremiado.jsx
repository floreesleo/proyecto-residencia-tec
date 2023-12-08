import {
  Card,
  Form,
  Button,
  Container,
  Accordion,
  Alert,
} from "react-bootstrap";

export default function AgregarAgremiado() {
  return (
    <>
      <Container className="mt-3">
        <Card className="mt-3">
          <Card.Body>
            <h1 className="mb-4">Agregar agremiado a la aplicación</h1>
            <Alert variant="info" style={{ textAlign: "center" }}>
              Agregar agremiado al apartado de "Agremiados" en la aplicación.
            </Alert>
            {/* Formulario de SignUp */}
            <Form>
              {/* Nombre del agremiado */}
              <Form.Group>
                <Form.Label>
                  Nombre completo del agremiado del agremiado
                </Form.Label>
                <Form.Control type="text" placeholder="Nombre del agramiado" />
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
