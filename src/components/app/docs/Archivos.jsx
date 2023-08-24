import NavBar from "../Nav";
import { Form, Button, Modal, Container } from "react-bootstrap";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export default function Files() {
  const [showFolder, setShowFolder] = useState(false);
  const [showFile, setShowFile] = useState(false);

  return (
    <>
      <NavBar />
      <Container>
        <h2>Gestor de documentos</h2>
        <Button
          className="me-1"
          variant="success"
          onClick={() => setShowFolder(true)}
        >
          <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
        <Button variant="success" onClick={() => setShowFile(true)}>
          <FontAwesomeIcon icon={faFileArrowUp} />
        </Button>
      </Container>

      {/* MODAL CARPETA */}
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
          <Form>
            <Form.Group>
              <Form.Label>Nombre de la carpeta</Form.Label>
              <Form.Control type="text" placeholder="Carpeta" />
            </Form.Group>
            <Form.Group>
              <Button type="submit" className="mt-2" variant="success">
                Crear
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

      {/* MODAL ARCHIVO */}
      <Modal
        show={showFile}
        onHide={() => setShowFile(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Subir archivo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Seleccionar archivo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="success">
                Subir
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
