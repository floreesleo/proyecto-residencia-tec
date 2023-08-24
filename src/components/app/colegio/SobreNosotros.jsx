import NavBar from "./../Nav";
import { Container, Card } from "react-bootstrap";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Container>
        <h2>Sobre nosotros</h2>
        <Card>
          <Card.Body>
            <Card.Title>Misión</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis et
              dignissim ornare sociis, elementum interdum odio per habitant
              litora cubilia montes justo lacinia ut, magnis a pellentesque sem
              lacus mi quis sociosqu donec est eros.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Visión</Card.Title>
            <Card.Text>
              Ante aptent sem nostra urna luctus nascetur metus sociosqu libero,
              sollicitudin congue himenaeos justo sed vivamus inceptos porttitor
              nam morbi, vehicula magna habitasse tempus arcu velit per blandit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
