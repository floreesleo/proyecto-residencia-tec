import { Card } from "react-bootstrap";

export default function CardAgremiados() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Nombre del agremiado</Card.Title>
        <Card.Link href="#">Facebook</Card.Link>
        <Card.Link href="#">Instagram</Card.Link>
        <Card.Link href="#">Twitter</Card.Link>
      </Card.Body>
    </Card>
  );
}
