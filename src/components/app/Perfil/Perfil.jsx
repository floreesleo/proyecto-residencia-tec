import {
  Card,
  Button,
  Container,
  Modal,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import NavBar from "./../Nav";
import { useState } from "react";
import { UserAuth } from "../../../context/AuthContext";

export default function Perfil() {
  const { user, signOut } = UserAuth();

  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar />
      <Container className="justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={() => setShow(true)}>
                Actualizar perfil
              </Button>
              <Button variant="danger" onClick={signOut}>
                Cerrar sesión
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Container>
      {/* MODAL */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Actualizar perfil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nuevo correo electronico</Form.Label>
              <Form.Control type="email" placeholder="example@example.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nueva contraseña</Form.Label>
              <Form.Control type="password" placeholder="****************" />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="w-100 mt-2" variant="primary">
                Actualizar perfil
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
