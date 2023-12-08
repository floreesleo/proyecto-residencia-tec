import { Card, Col } from "react-bootstrap";
import { useArq } from "./../../../../context/ArqContext";
import { useEffect } from "react";

export default function CardAgremiados() {
  const { getAgremiados, agremiados } = useArq();

  useEffect(() => {
    getAgremiados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Col>
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
            </Card.Body>
          </Card>
        ))}
      </Col>
    </>
  );
}
