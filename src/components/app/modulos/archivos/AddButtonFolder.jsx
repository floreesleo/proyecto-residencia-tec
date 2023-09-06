import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

// SUPABASE
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { supabase } from "./../../../../supabase/client";

export default function AddButtonFolder() {
  const supabaseClient = useSupabaseClient();

  const [showFolder, setShowFolder] = useState(false);
  const [nameFolder, setNameFolder] = useState("");

  async function handleCreateFolder() {
    // if (currentFolder == null) return;

    //| Crear una carpeta en supabase
    try {
      const { error } = await supabase
        .from("folders")
        .insert({
          name: nameFolder,
          userId: supabaseClient.user.id,
          // parentId: currentFolder.id,
          createdAt: new Date().toISOString(),
        })
        .single();

      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
    // el id del padre
    // el id del usuario
    //! parentId: currentFolder.id;
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
          <Form onSubmit={handleCreateFolder}>
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
