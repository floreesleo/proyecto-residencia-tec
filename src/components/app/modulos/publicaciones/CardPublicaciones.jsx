import { Container, Card, Button } from "react-bootstrap";

export default function CardPublicaciones() {
  return (
    <Container className="text-center">
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Titulo de publicación</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="outline-dark">Ir a algún lado</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
