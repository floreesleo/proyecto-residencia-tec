import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Login() {
  const { signInWithGoogle, message, error } = UserAuth();

  return (
    <>
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
              <Button type="submit" className="w-100 mt-2" variant="primary">
                Iniciar sesión
              </Button>
            </Form.Group>
            <Form.Group>
              <Button
                onClick={signInWithGoogle}
                className="w-100 mt-2"
                variant="success"
              >
                Iniciar sesión con Google
              </Button>
            </Form.Group>
          </Form>
          <Button className="mt-2" variant="dark" as={Link} to="/">
            Regresar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
