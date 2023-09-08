import { Carousel, Figure } from "react-bootstrap";
import building from "./../../assets/building.jpg";
import estructure from "./../../assets/estructure.jpg";

export default function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Figure>
          <Figure.Image width={500} height={505} alt="500x505" src={building} />
        </Figure>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure>
          <Figure.Image
            width={500}
            height={505}
            alt="500x505"
            src={estructure}
          />
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
          <Figure.Image width={500} height={505} alt="500x505" src={building} />
        </Figure>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Figure>
          <Figure.Image
            width={500}
            height={505}
            alt="500x505"
            src={estructure}
          />
        </Figure>
        <Carousel.Caption>
          <h3>Four slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
