// React
import { useState } from "react";

// Bootstrap
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

// AuthContext
import { UserAuth } from "../../context/AuthContext";

// react-router-dom
import { Link } from "react-router-dom";

export default function Login() {
  // AuthContext
  const { signInWithEmail, error, message, setEmailRef, setPasswordRef } =
    UserAuth();

  // Variables para ver contraseña
  const [valorPassword, setValorPassword] = useState("password");

  // Función para ver contraseña
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

            {/* Formulario de Login */}
            <Form onSubmit={signInWithEmail}>
              {/* Email */}
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

              {/* Password */}
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
                  // Ckeckbox para ver contraseña
                  label="Ver contraseña"
                  onClick={verContraseña}
                  style={{ color: "#fff" }}
                />
              </Form.Group>

              {/* Botón Submit */}
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

        {/* Contenedor de otros links */}
        <Container className="text-center">
          <Button
            variant="link"
            as={Link}
            to="/restablecer-contraseña"
            style={{ fontSize: "16px" }}
          >
            ¿Olvidaste tu contraseña?
          </Button>
          <br />
          <Button variant="link" as={Link} to="/" style={{ fontSize: "16px" }}>
            Regresar
          </Button>
        </Container>
      </Container>
    </>
  );
}
