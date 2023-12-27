import { Container, Card, Form, Button } from "react-bootstrap";

export default function MesaDirectiva() {
  return (
    <>
      <Container className="mt-3">
        <Card className="mt-3">
          <Card.Body>
            <h1 className="text-center mb-4">Mesa directiva</h1>

            {/* Formulario de publicacion */}
            <Form>
              {/* Nombre */}
              <Form.Group>
                <Form.Label>Nombre del integrante de Mesa directiva</Form.Label>
                <Form.Control type="text" required placeholder="Nombre" />
              </Form.Group>

              {/* Botón Submit */}
              <Form.Group className="mt-2">
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Agregar a la mesa directiva
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
