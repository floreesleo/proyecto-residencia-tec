import { useEffect } from "react";

import { Col, Card } from "react-bootstrap";

import { useArq } from "./../../../../../context/ArqContext";

export default function CardMesaDirectiva() {
  const { getDirectivos, directivos } = useArq();

  useEffect(() => {
    getDirectivos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Col>
        {directivos.map((directivo) => (
          <Card key={directivo.id} style={{ width: "18rem" }} className="mt-2">
            <Card.Body>
              <Card.Title>{directivo.nombre}</Card.Title>
              <Card.Link href={directivo.facebook} target="_blank">
                Perfil
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
}
