import { Container, Card, Button } from "react-bootstrap";

import example1 from "./../../../../../assets/img/example-1.jpg";

export default function CardPublicaciones() {
  return (
    <Container className="text-center">
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Body>
          <Card.Title>Titulo de publicación</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Subtitulo de la publicación
          </Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fermentum placerat consectetur. Etiam vel neque tempor, sollicitudin
            magna et, ultricies justo. Sed vitae mi interdum, porttitor lectus
            a, sodales justo.
          </Card.Text>
          <Card.Img variant="top" src={example1} />
          <Button variant="outline-dark" className="mt-2">
            Ir a algún lado
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
