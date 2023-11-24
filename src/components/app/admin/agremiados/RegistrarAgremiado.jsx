// React
import { useState } from "react";

// Bootstrap
import { Form, Button, Card, Alert, Container } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// AuthContext
import { UserAuth } from "../../../../context/AuthContext";

export default function Registro() {
  // AuthContext
  const {
    signUpAccount,
    messageSignUp,
    errorSignUp,
    setEmailRef,
    setPasswordRef,
  } = UserAuth();

  // Variables para ver la contraseña
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
      <Container className="mt-3">
        <Button
          variant="outline-primary"
          as={Link}
          to="/administrador"
          className="w-100"
          style={{ fontSize: "16px" }}
        >
          Regresar
        </Button>
        <Card className="mt-3">
          <Card.Body>
            <h1 className="text-center mb-4">Registrar agremiado</h1>
            {messageSignUp && <Alert variant="success">{messageSignUp}</Alert>}
            {errorSignUp && <Alert variant="danger">{errorSignUp}</Alert>}

            {/* Formulario de SignUp */}
            <Form onSubmit={signUpAccount}>
              {/* Email */}
              <Form.Group>
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  onChange={(ev) => setEmailRef(ev.target.value)}
                />
              </Form.Group>

              {/* Password */}
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={valorPassword}
                  placeholder="****************"
                  onChange={(ev) => setPasswordRef(ev.target.value)}
                />
                <Form.Check
                  // Ckeckbox para ver contraseña
                  label="Ver contraseña"
                  onClick={verContraseña}
                />
              </Form.Group>

              {/* Botón Submit */}
              <Form.Group>
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Registrar agremiado
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <br />
      </Container>
    </>
  );
}
