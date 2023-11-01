// React
import { useState } from "react";

// Bootstrap
import { Container, Button, Form, Card, Alert } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

import { supabase } from "../../../../../supabase/client";

export default function CrearPublicacion() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [link, setLink] = useState("");

  // Alertas y mensajes
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.from("publicaciones").insert({
        titulo: titulo,
        contenido: contenido,
        link: link,
      });

      console.log(result);

      // Mensaje de exito
      setMessage("¡Publicación creada con exito!");

      // Limpia los inputs del formulario
      setTitulo("");
      setContenido("");
      setLink("");
    } catch (error) {
      console.error(error);
      setError("Hubo un error al crear la publicación");
    }
  };

  return (
    <>
      <Container className="mt-3">
        <Button
          variant="outline-primary"
          as={Link}
          to="/administrador"
          style={{ fontSize: "16px" }}
        >
          Regresar
        </Button>
        <Card className="mt-3">
          <Card.Body>
            <h1 className="text-center mb-4">Crear publicación</h1>

            {/* Formulario de publicacion */}
            <Form onSubmit={handleSubmit}>
              {/* Titulo */}
              <Form.Group>
                <Form.Label>Titulo de la publicación</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Titulo"
                  onChange={(ev) => setTitulo(ev.target.value)}
                />
              </Form.Group>

              {/* Contenido */}
              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Contenido</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={5}
                  placeholder="Contenido del articulo"
                  onChange={(ev) => setContenido(ev.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mt-2">
                <Form.Label>Subir imagen</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/png, image/jpge, image/jpg, .doc, .docx, .txt, .pdf"
                />
              </Form.Group>

              {/* Link */}
              <Form.Group className="mt-2">
                <Form.Label>
                  Link de publicación en otra red social (Opcional)
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Link de la publicación"
                  onChange={(ev) => setLink(ev.target.value)}
                />
              </Form.Group>

              {/* Botón Submit */}
              <Form.Group className="mt-2">
                <Button
                  type="submit"
                  className="mt-2 w-100"
                  variant="outline-primary"
                >
                  Crear publicación
                </Button>
              </Form.Group>
            </Form>
            {message && (
              <Alert variant="success" className="mt-3">
                {message}
              </Alert>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
