import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";

import { supabase } from "./../../../../supabase/client";
import { useSession } from "@supabase/auth-helpers-react";

export default function AddButtonFile() {
  const [showFile, setShowFile] = useState(false);
  const [nombreDoc, setNombreDoc] = useState("");

  const sessionSupabase = useSession();

  async function uploadDoc(e) {
    let file = e.target.files[0];

    const { data, error } = supabase.storage
      .from("documentos")
      .upload(sessionSupabase.user.id + "/" + nombreDoc, file);
  }

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
              <Form.Control
                type="file"
                accept="image/png, image/jpeg, .jpg, .doc, .docx, pdf, .xlsx, "
                onChange={(e) => uploadDoc(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre del documento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Documento"
                onChange={(ev) => setNombreDoc(ev.target.value)}
              />
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
