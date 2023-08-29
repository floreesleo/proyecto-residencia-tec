import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddButtonFolder() {
  const [showFolder, setShowFolder] = useState(false);
  const [nameFolder, setNameFolder] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Crear una carpeta en supabase
    // el id del padre
    // el id del usuario
    // path es para la navegacion de la carpeta, saber si tiene padre
    // saber cuando se creó la carpeta

    setNameFolder("");
    setShowFolder(false);
  }
  return (
    <>
      <Button
        className="me-1"
        variant="outline-success"
        size="sm"
        onClick={() => setShowFolder(true)}
      >
        <FontAwesomeIcon icon={faFolderPlus} />
      </Button>

      {/* MODAL */}
      <Modal
        show={showFolder}
        onHide={() => setShowFolder(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Crear carpeta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre de la carpeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Carpeta"
                onChange={(ev) => setNameFolder(ev.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="mt-2" variant="success">
                Crear
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
