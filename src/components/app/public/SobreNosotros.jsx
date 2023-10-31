import NavBar from "./../shared/Nav";

// Bootstrap
import { Container, Card } from "react-bootstrap";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUsers,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Container className="mt-2">
        <h2>Sobre nosotros</h2>
        <Card>
          <Card.Body>
            <Card.Title>Nuestra misión</Card.Title>
            <Card.Text>
              Nuestra misión es integrar un grupo unido; con profesionales de la
              Arquitectura, comprometidos con nuestra profesión; preocupados por
              nuestros colegas y todas aquellas instituciones o personas que
              dependan de nuestro servicio.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Nuestro objetivo</Card.Title>
            <Card.Text>
              Nuestro objetivo es velar por la ética, formación y ordenación del
              libre ejercicio de la profesión de arquitecto, representar sus
              intereses y difundir sus proyectos, en los más modernos campos de
              actuación de la profesión, con esta certificación como Colegio de
              profesionistas; el Colegio ofrecerá alternativas avanzadas de
              tecnología, información e intercambio, compatibles, para ello
              utilizará todos los Sistemas, Redes y Bases de Datos de mayor
              eficiencia, interdependencia y acceso global. En marzo de 2022, se
              obtiene la Certificación como Colegio de profesionistas en el
              Estado de Chiapas con número GECH/UA/SE/DES/001/2022.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="mb-5">
          <Card.Body>
            <Card.Title>Contactanos</Card.Title>
            <Card.Subtitle className="mb-2">
              Teléfono <FontAwesomeIcon icon={faPhone} />
            </Card.Subtitle>
            <Card.Text className="text-muted">+52 (963) 632 6561</Card.Text>
            <Card.Subtitle className="mb-2">
              Correo electronico <FontAwesomeIcon icon={faEnvelope} />
            </Card.Subtitle>
            <Card.Text className="text-muted">
              arquitectosdecomitan@outlook.es
            </Card.Text>
            <Card.Subtitle className="mb-2">
              Nuestras redes <FontAwesomeIcon icon={faUsers} />
            </Card.Subtitle>
            <Card.Text>
              <a
                href="https://www.facebook.com/arquitectos.de.comitan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://www.instagram.com/arquitectosdecomitan_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Card.Text>
            <hr />
            <Card.Subtitle className="mb-2">
              Dirección <FontAwesomeIcon icon={faLocationDot} />
            </Card.Subtitle>
            <Card.Text className="text-muted">
              1ra. calle sur poniente #35 barrio de guadalupe c.p. 30020
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
