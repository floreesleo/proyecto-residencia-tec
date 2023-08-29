import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function AddButtonFile() {
  const [showFile, setShowFile] = useState(false);
  return (
    <>
      <Button
        variant="outline-success"
        size="sm"
        onClick={() => setShowFile(true)}
      >
        <FontAwesomeIcon icon={faFileArrowUp} />
      </Button>

      {/* MODAL */}
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
