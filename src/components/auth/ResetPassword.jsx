// Bootstrap
import { Container, Card, Button, Form, Alert } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// AuthContext
import { UserAuth } from "../../context/AuthContext";

export default function ResetPassword() {
  // AuthContext
  const { resetPassword, error, message, setEmailRef } = UserAuth();

  const handleSubmit = async () => {
    resetPassword();
  };

  return (
    <>
      <Container className="mt-5">
        <Card style={{ background: "#002161" }}>
          <Card.Body>
            <h1 className="text-center mb-4" style={{ color: "#fff" }}>
              Restablecer contraseña
            </h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Formulario de restablecer contraseña */}
            <Form onSubmit={handleSubmit}>
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

              {/* Botón Sumbit */}
              <Form.Group>
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Restablecer contraseña
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
            to="/login"
            style={{ fontSize: "16px" }}
          >
            Regresar
          </Button>
        </Container>
      </Container>
    </>
  );
}
