// Bootstrap
import {
  Container,
  Card,
  Button,
  Form,
  Alert,
  FloatingLabel,
} from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// AuthContext
import { UserAuth } from "../../context/AuthContext";

export default function ResetPassword() {
  // AuthContext
  const { resetPassword, errorResetPass, messageResetPass, setEmailRef } =
    UserAuth();

  const handleSubmit = async () => {
    resetPassword();
  };

  return (
    <>
      <Container className="mt-5">
        <Card>
          <Card.Header>Restablecer contraseña</Card.Header>
          <Card.Body>
            <Alert variant="dark" style={{ textAlign: "center" }}>
              Se enviará un correo a tú bandeja para restablecer tu contraseña.
            </Alert>
            {messageResetPass && (
              <Alert variant="success">{messageResetPass}</Alert>
            )}
            {errorResetPass && <Alert variant="danger">{errorResetPass}</Alert>}

            {/* Formulario de restablecer contraseña */}
            <Form onSubmit={handleSubmit}>
              {/* Email */}
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

              {/* Botón Sumbit */}
              <Form.Group>
                <Button type="submit" className="mt-2 w-100" variant="success">
                  Restablecer contraseña
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        {/* Contenedor de otros links */}
        <Container className="text-center">
          <Button variant="link" as={Link} to="/login">
            Regresar
          </Button>
        </Container>
      </Container>
    </>
  );
}
