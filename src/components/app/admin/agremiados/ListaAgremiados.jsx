import { useEffect } from "react";

import { useArq } from "./../../../../context/ArqContext";

import { Container, Accordion, Card, Button } from "react-bootstrap";

export default function ListaAgremiados() {
  const { agremiados, getAgremiados } = useArq();

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
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lista de publicaciones</Accordion.Header>
            <Accordion.Body>
              {agremiados.map((agremiado) => (
                <Card
                  style={{ width: "18rem", marginTop: "1rem" }}
                  key={agremiado.id}
                >
                  <Card.Body>
                    <Card.Title>{agremiado.nombre}</Card.Title>
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
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
