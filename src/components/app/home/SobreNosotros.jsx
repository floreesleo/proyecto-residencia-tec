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
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
    </>
  );
}
