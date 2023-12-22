import { useEffect } from "react";

import NavBar from "../navegacion/Nav";

// Bootstrap
import { Container, Card } from "react-bootstrap";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAddressBook,
  faBullseye,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";

import { useArq } from "./../../../context/ArqContext";

import Iframe from "react-iframe";

export default function AboutUs() {
  const { getDatosColegio, datosColegio } = useArq();

  useEffect(() => {
    getDatosColegio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "4rem", marginBottom: "6rem" }}>
        <h2>Sobre nosotros</h2>
        {datosColegio.map((dato) => (
          <div key={dato.id}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Nuestra misión <FontAwesomeIcon icon={faPenNib} />
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {dato.mision}
                </Card.Text>
              </Card.Body>
            </Card>

            <br />
            <Card>
              <Card.Body>
                <Card.Title>
                  Nuestro objetivo <FontAwesomeIcon icon={faBullseye} />
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  {dato.objetivo}
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card className="mb-5">
              <Card.Body>
                <Card.Title>
                  Contactanos <FontAwesomeIcon icon={faAddressBook} />
                </Card.Title>
                <Card.Subtitle className="mb-2">Teléfono</Card.Subtitle>
                <Card.Text className="text-muted">{dato.telefono}</Card.Text>
                <Card.Subtitle className="mb-2">
                  Correo electronico
                </Card.Subtitle>
                <Card.Text className="text-muted">{dato.correo}</Card.Text>
                <Card.Subtitle className="mb-2">
                  Nuestras redes sociales
                </Card.Subtitle>
                <Card.Text>
                  <a
                    href={dato.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <br />
                  <a
                    href={dato.instagram}
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
                <Card.Text className="text-muted">{dato.direccion}</Card.Text>
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.4229320624017!2d-92.14027174569578!3d16.250080334787377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d38aefc6306cb%3A0xadbbfed923cd9e83!2sPrimera%20C.%20Sur%20Pte.%2046%2C%20Guadalupe%2C%2030020%20Comit%C3%A1n%20de%20Dom%C3%ADnguez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1703034601574!5m2!1ses-419!2smx"
                  width="100%"
                  height="250"
                  loading="lazy"
                  allowFullScreen
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </>
  );
}
