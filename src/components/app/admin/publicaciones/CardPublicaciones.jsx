// React
import { useEffect } from "react";

// Bootstrap
import { Toast } from "react-bootstrap";

// NewsContext
import { useNews } from "../../../../context/NewsContext";

export default function CardPublicaciones() {
  const { publicaciones, getPublicaciones } = useNews();

  useEffect(() => {
    getPublicaciones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {publicaciones.map((publicacion) => (
        <Toast key={publicacion.id} className="mb-3">
          <Toast.Header closeButton={false}>
            <strong className="me-auto">{publicacion.titulo}</strong>
            <small>{publicacion.created_at}</small>
          </Toast.Header>
          <Toast.Body>{publicacion.contenido}</Toast.Body>
        </Toast>
      ))}
    </div>
  );
}
