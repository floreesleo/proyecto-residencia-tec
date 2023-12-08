// React
import { useState } from "react";

// Bootstrap
import { Container, Button, Form, Card, Alert } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useNews } from "../../../../context/NewsContext";

export default function CrearPublicacion() {
  const { crearPublicacion, message, error } = useNews();

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    crearPublicacion(titulo, contenido, link);
    setTitulo("");
    setContenido("");
    setLink("");
  };

  return (
    <>
      <Container className="mt-3">
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
                  value={titulo}
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
                  value={contenido}
                />
              </Form.Group>

              {/* Link */}
              <Form.Group className="mt-2">
                <Form.Label>Link de la publicación</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Titulo"
                  onChange={(ev) => setLink(ev.target.value)}
                  value={link}
                />
              </Form.Group>

              {/* Botón Submit */}
              <Form.Group className="mt-2">
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Crear publicación
                </Button>
              </Form.Group>
            </Form>
            <br />
            {message && (
              <Alert variant="success" className="mt-3">
                {message}
              </Alert>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
          </Card.Body>
        </Card>
        <Button variant="danger" as={Link} to="/modificar-publicacion">
          Modificar publicaciones realizadas
        </Button>
      </Container>
    </>
  );
}
