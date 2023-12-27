// React
import { useEffect } from "react";

// Bootstrap
import { Toast, Row, Col, Image } from "react-bootstrap";

// NewsContext
import { useNews } from "../../../../context/NewsContext";

export default function CardPublicaciones() {
  const { publicaciones, getPublicaciones } = useNews();

  useEffect(() => {
    getPublicaciones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {publicaciones.map((publicacion) => (
        <Toast key={publicacion.id} className="mb-3">
          <Toast.Header
            closeButton={false}
            style={{ backgroundColor: "#0D6EFD" }}
          >
            <strong className="me-auto" style={{ color: "#fff" }}>
              {publicacion.titulo}
            </strong>
            <small style={{ color: "#b2bec3" }}>{publicacion.created_at}</small>
          </Toast.Header>
          <Toast.Body>
            {publicacion.contenido}
            <Row className="mt-2">
              <Col col-xs={6} col-md={4}>
                <Image src={publicacion.imagen} thumbnail />
              </Col>
            </Row>
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
}
