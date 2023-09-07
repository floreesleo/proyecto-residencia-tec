import { Container, Card, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function ResetPassword() {
  const { resetPassword, error, message, setEmailRef } = UserAuth();

  return (
    <>
      <Container className="mt-2">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Restablecer contraseña</h2>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={resetPassword}>
              <Form.Group>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  onChange={(ev) => setEmailRef(ev.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Button type="submit" className="mt-2" variant="primary">
                  Restablecer contraseña
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Button variant="link" as={Link} to="/login">
          Regresar
        </Button>
      </Container>
    </>
  );
}
