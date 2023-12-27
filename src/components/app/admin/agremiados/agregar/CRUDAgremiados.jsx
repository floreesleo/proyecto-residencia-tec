import { Card, Button, Container } from "react-bootstrap";
import { useArq } from "../../../../../context/ArqContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CRUDAgremiados() {
  const { getAgremiados, agremiados } = useArq();

  useEffect(() => {
    getAgremiados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditar = () => {
    console.log("editando...");
  };

  const eliminarPublicacion = (id) => {
    console.log("eliminando..." + id);
  };

  return (
    <>
      <Container>
        {agremiados.map((agremiado) => (
          <Card key={agremiado.id} style={{ width: "18rem" }} className="mt-2">
            <Card.Body>
              <Card.Title>{agremiado.nombre}</Card.Title>
              <Card.Link href={agremiado.facebook} target="_blank">
                Facebook
              </Card.Link>
              <Card.Link href={agremiado.twitter} target="_blank">
                Instagram
              </Card.Link>
              <Card.Link href={agremiado.instagram} target="_blank">
                Twitter
              </Card.Link>
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
                onClick={() => eliminarPublicacion(agremiado.id)}
              >
                Eliminar publicación
              </Button>
            </Card.Body>
          </Card>
        ))}
        <Button variant="link" as={Link} to="/administrador">
          Regresar al administrador
        </Button>
      </Container>
    </>
  );
}
