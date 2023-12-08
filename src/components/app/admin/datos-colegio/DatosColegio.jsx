import { Container, Card, Button, Form } from "react-bootstrap";

export default function DatosColegio() {
  return (
    <>
      <Container className="mt-3">
        <Card className="mt-3">
          <Card.Body>
            <h1 className="text-center mb-4">Datos del colegio</h1>

            {/* Formulario de publicacion */}
            <Form>
              {/* Contenido */}
              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Misión del colegio</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={5}
                  placeholder="Misión del colegio"
                  defaultValue="colegio"
                />
              </Form.Group>

              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Objetivo del colegio</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={5}
                  placeholder="Objetivo del colegio"
                  defaultValue="colegio"
                />
              </Form.Group>

              <Form.Group className="mt-2">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono de contacto"
                  defaultValue="9631112233"
                />
              </Form.Group>

              <Form.Group className="mt-2">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Correo de contacto"
                  defaultValue="colegio@gmail.com"
                />
              </Form.Group>

              {/* Botón Submit */}
              <Form.Group className="mt-2">
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Editar datos del colegio
                </Button>
              </Form.Group>
            </Form>
            <br />
            {/* {message && (
              <Alert variant="success" className="mt-3">
                {message}
              </Alert>
            )}
            {error && <Alert variant="danger">{error}</Alert>} */}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
