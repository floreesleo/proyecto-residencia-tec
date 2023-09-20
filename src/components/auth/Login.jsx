import { useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    signInWithEmail,
    // signInWithGoogle,
    error,
    message,
    setEmailRef,
    setPasswordRef,
  } = UserAuth();

  const [valorPassword, setValorPassword] = useState("password");

  const verContraseña = () => {
    if (valorPassword == "password") {
      setValorPassword("text");
    } else {
      setValorPassword("password");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Card style={{ background: "#002161" }}>
          <Card.Body>
            <h1 className="text-center mb-4" style={{ color: "#fff" }}>
              Inicio de sesión
            </h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={signInWithEmail}>
              <Form.Group>
                <Form.Label
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  Correo electronico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  onChange={(ev) => setEmailRef(ev.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  Contraseña
                </Form.Label>
                <Form.Control
                  type={valorPassword}
                  placeholder="****************"
                  onChange={(ev) => setPasswordRef(ev.target.value)}
                />
                <Form.Check
                  label="Ver contraseña"
                  onClick={verContraseña}
                  style={{ color: "#fff" }}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  type="submit"
                  className="mt-2 w-100"
                  variant="primary"
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  Iniciar sesión
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Container className="text-center">
          <Button variant="link" as={Link} to="/restablecer-contraseña">
            ¿Olvidaste tu contraseña?
          </Button>
          <br />
          <Button variant="link" as={Link} to="/">
            Regresar
          </Button>
        </Container>
      </Container>
    </>
  );
}
