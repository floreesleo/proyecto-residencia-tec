import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Registro() {
  const {
    signUpAccount,
    signInWithGoogle,
    message,
    error,
    setEmailRef,
    setPasswordRef,
  } = UserAuth();

  const [eye, setEye] = useState("password");

  const cambiarOjo = () => {
    if (eye == "password") {
      setEye("text");
    } else {
      setEye("password");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Registro</h2>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={signUpAccount}>
              <Form.Group>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  onChange={(ev) => setEmailRef(ev.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={eye}
                  placeholder="****************"
                  onChange={(ev) => setPasswordRef(ev.target.value)}
                />
                <FontAwesomeIcon icon={faEyeSlash} onClick={cambiarOjo} />
              </Form.Group>
              <Form.Group>
                <Button type="submit" className="mt-2" variant="primary">
                  Registrarse
                </Button>
              </Form.Group>
            </Form>
            <Form.Group>
              <Button
                onClick={signInWithGoogle}
                className="mt-2"
                variant="success"
              >
                Iniciar sesión con Google
              </Button>
            </Form.Group>
          </Card.Body>
        </Card>

        <Button variant="link" as={Link} to="/login">
          ¿Ya tienes una cuenta?
        </Button>
      </Container>
    </>
  );
}
