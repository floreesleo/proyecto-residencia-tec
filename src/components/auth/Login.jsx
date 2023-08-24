import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { signInWithGoogle, message, error } = UserAuth();

  return (
    <>
      <Container className="mt-2">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Inicio de sesión</h2>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="example@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="****************" />
              </Form.Group>
              <Form.Group>
                <Button type="submit" className="mt-2" variant="primary">
                  Iniciar sesión
                </Button>
              </Form.Group>
              <Form.Group>
                <Button
                  onClick={signInWithGoogle}
                  className="mt-2"
                  variant="success"
                >
                  Iniciar sesión con Google
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Button variant="link">Olvidaste tu contraseña?</Button>
        <Button variant="link" as={Link} to="/registro">
          ¿No tienes una cuenta?
        </Button>
      </Container>
    </>
  );
}
