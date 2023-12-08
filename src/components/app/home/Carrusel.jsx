// Bootstrap
import { Figure } from "react-bootstrap";

// Imagenes de prueba
import fondoColegio from "./../../../assets/img/fondo-colegio.png";
// import example3 from "./../../../assets/img/example-3.jpg";

export default function Carrusel() {
  return (
    <>
      <Figure>
        <Figure.Image
          width="100%"
          height={380}
          alt="171x180"
          src={fondoColegio}
        />
        <Figure.Caption style={{ fontSize: "15px" }}>
          Celebra con nosotros el lanzamiento de la aplicación web del Colegio
          de arqutiectos de Comitán
        </Figure.Caption>
      </Figure>
      {/* <Carousel>
        <Carousel.Item>
          <Figure>
            <Figure.Image src={example3} />
          </Figure>
          <Carousel.Caption>
            <h3 style={{ color: "#000" }}>Lanzamiento de aplicación</h3>
            <p style={{ color: "#000" }}>
              Celebra con nosotros el lanzamiento de la nueva aplicación del
              Colegio de arquitectos de Comitán
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Figure>
            <Figure.Image src={example3} />
          </Figure>
          <Carousel.Caption>
            <h3 style={{ color: "#000" }}>Visitanos</h3>
            <p style={{ color: "#000" }}>
              Estamos ubicados en la 1ra. calle sur poniente #35 barrio de
              guadalupe c.p. 30020
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}
