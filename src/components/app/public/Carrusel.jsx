// Bootstrap
import { Carousel, Figure } from "react-bootstrap";

// Imagenes de prueba
import fondoColegio from "./../../../assets/img/fondo-colegio.png";
import example2 from "./../../../assets/img/example-2.jpg";
import example3 from "./../../../assets/img/example-3.jpg";

export default function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Figure>
          <Figure.Image src={fondoColegio} />
        </Figure>
        <Carousel.Caption>
          <h3>Colegio de arquitectos de Comitán</h3>
          <p>Bienvenidos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure>
          <Figure.Image src={example2} />
        </Figure>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure>
          <Figure.Image src={example3} />
        </Figure>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}