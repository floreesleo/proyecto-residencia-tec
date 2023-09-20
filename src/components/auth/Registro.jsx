import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Registro() {
  const {
    signUpAccount,
    // signInWithGoogle,
    message,
    error,
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
              Registrar agremiado
            </h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={signUpAccount}>
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
                  Registrar agremiado
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Container className="text-center">
          <Button variant="link" as={Link} to="/">
            Regresar
          </Button>
        </Container>
      </Container>
    </>
  );
}
