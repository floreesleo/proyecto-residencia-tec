// React
import { useEffect } from "react";

// Bootstrap
import { Card, Button } from "react-bootstrap";

// NewsContext
import { useNews } from "../../../../../context/NewsContext";

export default function CardPublicaciones() {
  const { publicaciones, getPublicaciones } = useNews();

  useEffect(() => {
    getPublicaciones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {publicaciones.map((publicacion) => (
        <Card key={publicacion.id} className="mt-3">
          <Card.Header as="h1">{publicacion.titulo}</Card.Header>
          <Card.Body>
            <Card.Text> {publicacion.contenido} </Card.Text>
            <hr />
            <Button
              variant="outline-success"
              href={publicacion.link}
              target="_blank"
            >
              Ver publicación completa
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
