import { useEffect } from "react";

import { Container, Card, Button, Form } from "react-bootstrap";

import { useArq } from "./../../../../context/ArqContext";

export default function DatosColegio() {
  const { getDatosColegio, datosColegio } = useArq();

  useEffect(() => {
    getDatosColegio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {datosColegio.map((dato) => (
        <div key={dato.id}>
          <Container className="mt-3">
            <Card className="mt-3">
              <Card.Body>
                <h1 className="text-center mb-4">Datos del colegio</h1>

                {/* Formulario de publicacion */}
                <Form>
                  {/* Contenido */}
                  <Form.Group
                    className="mt-2"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Misión del colegio</Form.Label>
                    <Form.Control
                      as="textarea"
                      required
                      rows={5}
                      placeholder="Misión del colegio"
                      defaultValue={dato.mision}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mt-2"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Objetivo del colegio</Form.Label>
                    <Form.Control
                      as="textarea"
                      required
                      rows={5}
                      placeholder="Objetivo del colegio"
                      defaultValue={dato.objetivo}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Teléfono de contacto"
                      defaultValue={dato.telefono}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Correo de contacto"
                      defaultValue={dato.correo}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>Direccion del colegio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Direccion del colegio"
                      defaultValue={dato.direccion}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>URL de Facebook</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="URL de Facebook"
                      defaultValue={dato.facebook}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>URL de Instagram</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="URL de Instagram"
                      defaultValue={dato.instagram}
                    />
                  </Form.Group>

                  {/* Botón Submit */}
                  <Form.Group className="mt-2">
                    <Button
                      type="submit"
                      className="mt-2 w-100"
                      variant="primary"
                    >
                      Editar datos del colegio
                    </Button>
                  </Form.Group>
                </Form>
                <br />
              </Card.Body>
            </Card>
          </Container>
        </div>
      ))}
    </>
  );
}
