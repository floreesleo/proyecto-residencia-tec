// React
import { useState } from "react";

import NavBar from "../../../shared/Nav";

// Bootstrap
import { Container, Button, Form, Card } from "react-bootstrap";

import { supabase } from "../../../../../supabase/client";

export default function CrearPublicacion() {
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.from("publicaciones").insert({
        titulo: titulo,
        subtitulo: subtitulo,
        contenido: contenido,
        link: link,
      });

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <Container>
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
                  placeholder="Titulo"
                  onChange={(ev) => setTitulo(ev.target.value)}
                />
              </Form.Group>

              {/* Subtitulo */}
              <Form.Group className="mt-2">
                <Form.Label>Subtitulo de la publicación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subtitulo"
                  onChange={(ev) => setSubtitulo(ev.target.value)}
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
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
