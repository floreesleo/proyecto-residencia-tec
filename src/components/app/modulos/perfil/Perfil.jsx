// React
import { useState } from "react";

// Bootstrap
import {
  Card,
  Button,
  Container,
  Modal,
  Form,
  ButtonGroup,
  Alert,
} from "react-bootstrap";

// Navbar
import NavBar from "../../Nav";

// react-router-dom
import { Link } from "react-router-dom";

//AuthContext
import { UserAuth } from "../../../../context/AuthContext";

//Supabase
import { useUser, useSession } from "@supabase/auth-helpers-react";
import { supabase } from "../../../../supabase/client";

export default function Perfil() {
  const { signOut } = UserAuth();

  // constantes de supabase
  const sessionSupabase = useSession();
  const user = useUser();

  const [show, setShow] = useState(false);

  // constantes para nueva contraseña
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Variables para ver contraseña
  const [valorPassword, setValorPassword] = useState("password");

  // Alertas
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const verContraseña = () => {
    if (valorPassword == "password") {
      setValorPassword("text");
    } else {
      setValorPassword("password");
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        if (user) {
          const { error } = await supabase.auth.api.updateUser(user.id, {
            password: newPassword,
          });

          if (error) throw error;

          setMessage("Contraseña actualizada exitosamente.");
        }
      } catch (error) {
        console.error(error);
        setError("Hubo un error al actualizar la contraseña: " + error);
      }
    } else {
      setError("Las contraseñas no coinciden.");
    }
  };

  return (
    <>
      <NavBar />
      <Container className="mt-2 ">
        <Card>
          <Card.Img variant="top" src={sessionSupabase.user.picture} />
          <Card.Body>
            <Card.Title>
              <h2 style={{ fontWeight: "bold" }}>Correo electronico:</h2>
              {sessionSupabase.user.email}
            </Card.Title>
            <Card.Text>{sessionSupabase.user.name}</Card.Text>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={() => setShow(true)}>
                Actualizar contraseña
              </Button>
              <Button variant="danger" onClick={() => signOut()}>
                Cerrar sesión
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
        <Button variant="link" as={Link} to="/documentos">
          Regresar
        </Button>
      </Container>

      {/* MODAL */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="mt-5"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Actualizar contraseña
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePasswordChange}>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            {/* Email */}
            <Form.Group>
              <Form.Label>Correo electronico:</Form.Label>
              <Form.Control
                type="email"
                disabled
                placeholder={sessionSupabase.user.email}
              />
            </Form.Group>

            {/* Nueva contraseña */}
            <Form.Group>
              <Form.Label>Nueva contraseña</Form.Label>
              <Form.Control
                type={valorPassword}
                placeholder="****************"
                onChange={(ev) => setNewPassword(ev.target.value)}
              />
              <Form.Check
                // Ckeckbox para ver contraseña
                label="Ver contraseña"
                onClick={verContraseña}
                style={{ color: "#000", marginTop: "5px" }}
              />
            </Form.Group>

            {/* Confirmar nueva contraseña */}
            <Form.Group>
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="****************"
                onChange={(ev) => setConfirmPassword(ev.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="w-100 mt-2" variant="primary">
                Actualizar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
