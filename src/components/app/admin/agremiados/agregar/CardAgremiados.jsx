import { Card, Col, Row } from "react-bootstrap";
import { useArq } from "../../../../../context/ArqContext";
import { useEffect } from "react";

export default function CardAgremiados() {
  const { getAgremiados, agremiados } = useArq();

  useEffect(() => {
    getAgremiados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row className="justify-content-center">
      {agremiados.map((agremiado) => (
        <Col key={agremiado.id} xs={12} md={6} lg={4} className="mb-4">
          <Card style={{ width: "18rem" }} className="text-center">
            <Card.Body>
              <Card.Title>{agremiado.nombre}</Card.Title>
              <Card.Link href={agremiado.facebook} target="_blank">
                Facebook
              </Card.Link>
              <Card.Link href={agremiado.twitter} target="_blank">
                Twitter
              </Card.Link>
              <Card.Link href={agremiado.instagram} target="_blank">
                Instagram
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
