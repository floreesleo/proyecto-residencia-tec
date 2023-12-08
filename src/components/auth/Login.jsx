// React
import { useState } from "react";

// Bootstrap
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  FloatingLabel,
} from "react-bootstrap";

// AuthContext
import { UserAuth } from "../../context/AuthContext";

// react-router-dom
import { Link } from "react-router-dom";

export default function Login() {
  // AuthContext
  const {
    signInWithEmail,
    errorSignIn,
    messageSignIn,
    setEmailRef,
    setPasswordRef,
  } = UserAuth();

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
        <Card>
          <Card.Header>Inicio de sesión | Agremiados</Card.Header>
          <Card.Body>
            <Alert variant="info" style={{ textAlign: "center" }}>
              Inicio de sesión para gestor de documentos unicamente para
              agremiados del Colegio de Arquitectos de Comitán.
            </Alert>
            {messageSignIn && <Alert variant="success">{messageSignIn}</Alert>}
            {errorSignIn && <Alert variant="danger">{errorSignIn}</Alert>}

            {/* Formulario de Login */}
            <Form onSubmit={signInWithEmail}>
              {/* Email */}
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Correo electronico"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@dominio.com"
                    onChange={(ev) => setEmailRef(ev.target.value)}
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Password */}
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Contraseña"
                  className="mb-3"
                >
                  <Form.Control
                    type={valorPassword}
                    placeholder="****************"
                    onChange={(ev) => setPasswordRef(ev.target.value)}
                  />
                </FloatingLabel>
                <Form.Check
                  // Ckeckbox para ver contraseña
                  label="Ver contraseña"
                  onClick={verContraseña}
                  style={{ marginTop: "5px" }}
                />
              </Form.Group>
              {/* Botón Submit */}
              <Form.Group>
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Iniciar sesión
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        {/* Contenedor de otros links */}
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
