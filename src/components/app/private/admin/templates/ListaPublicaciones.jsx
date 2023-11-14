// React
import { useEffect } from "react";

// Bootstrap
import { Container, Card, Button } from "react-bootstrap";

// NewsContext
import { useNews } from "../../../../../context/NewsContext";

export default function ListaPublicaciones() {
  const { publicaciones, getPublicaciones } = useNews();

  useEffect(() => {
    getPublicaciones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditar = () => {
    console.log("editando...");
  };

  const eliminarPublicacion = (id) => {
    console.log("eliminando..." + id);
  };

  return (
    <Container>
      <h1>Lista de publicaciones</h1>

      {publicaciones.map((publicacion) => (
        <Card
          style={{ width: "18rem", marginTop: "1rem" }}
          key={publicacion.id}
        >
          <Card.Body>
            <Card.Title>{publicacion.titulo}</Card.Title>
            <Card.Text>{publicacion.contenido}</Card.Text>
            <Button
              variant="outline-success"
              className="w-100"
              onClick={() => handleEditar()}
            >
              Editar publicación
            </Button>
            <Button
              variant="outline-danger"
              className="w-100 mt-2"
              onClick={() => eliminarPublicacion(publicacion.id)}
            >
              Eliminar publicación
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
