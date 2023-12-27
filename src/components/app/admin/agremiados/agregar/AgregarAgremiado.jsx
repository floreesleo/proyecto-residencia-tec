import { useState } from "react";

import {
  Card,
  Form,
  Button,
  Container,
  Accordion,
  Alert,
} from "react-bootstrap";

import { useArq } from "../../../../../context/ArqContext";

import { Link } from "react-router-dom";

export default function AgregarAgremiado() {
  const { agregarAgremiado } = useArq();

  const [nombre, setNombre] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    agregarAgremiado(nombre, facebook, twitter, instagram);
  };
  return (
    <>
      <Container className="mt-3">
        <Card className="mt-3">
          <Card.Body>
            <h1 className="mb-4">Agregar agremiado a la aplicación</h1>
            <Alert variant="info" style={{ textAlign: "center" }}>
              Agregar agremiado al apartado de <b>Agremiados</b> en la
              aplicación.
            </Alert>
            {/* Formulario de SignUp */}
            <Form onSubmit={handleSubmit}>
              {/* Nombre del agremiado */}
              <Form.Group>
                <Form.Label>
                  Nombre completo del agremiado del agremiado
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Nombre del agramiado"
                  onChange={(ev) => setNombre(ev.target.value)}
                  value={nombre}
                />
              </Form.Group>

              <hr />
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Redes sociales (opcional)</Accordion.Header>
                  <Accordion.Body>
                    {/* Facebook */}
                    <Form.Group>
                      <Form.Label>Facebook</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="URL del Facebook"
                        onChange={(ev) => setFacebook(ev.target.value)}
                        value={facebook}
                      />
                    </Form.Group>

                    {/* Instagram */}
                    <Form.Group>
                      <Form.Label>Instagram</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="URL de Instagram"
                        onChange={(ev) => setInstagram(ev.target.value)}
                        value={instagram}
                      />
                    </Form.Group>

                    {/* Twitter */}
                    <Form.Group>
                      <Form.Label>Twitter</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="URL de Twitter"
                        onChange={(ev) => setTwitter(ev.target.value)}
                        value={twitter}
                      />
                    </Form.Group>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Botón Submit */}
              <Form.Group>
                <Button type="submit" className="mt-2 w-100" variant="primary">
                  Agregar datos del agremiado
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Button variant="danger" as={Link} to="/modificar-publicacion">
          Modificar agremiados agregados
        </Button>
      </Container>
    </>
  );
}
