// Bootstrap
import { Container, Button, Accordion, Tab, Tabs } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

import CrearPublicaciones from "./publicaciones/CrearPublicacion";
import RegistrarAgremiado from "./agremiados/RegistrarAgremiado";
import AgregarAgremiado from "./agremiados/AgregarAgremiado";
import MesaDirectiva from "./agremiados/MesaDirectiva";
import DatosColegio from "./datos-colegio/DatosColegio";

export default function Administrador() {
  return (
    <>
      <Container className="text-center mt-3">
        <h1>Administrador | Colegio de arquitectos de Comitán</h1>
        <hr />
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="Publicaciones" title="Gestor de publicaciones">
            <CrearPublicaciones />
          </Tab>
          <Tab eventKey="profile" title="Agremiados">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Registrar agremiado</Accordion.Header>
                <Accordion.Body>
                  <RegistrarAgremiado />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Mesa directiva</Accordion.Header>
                <Accordion.Body>
                  <MesaDirectiva />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Agregar agremiado</Accordion.Header>
                <Accordion.Body>
                  <AgregarAgremiado />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
          <Tab eventKey="aplicacion" title="Aplicación">
            <DatosColegio />
          </Tab>
        </Tabs>

        <hr />
        <Button
          variant="outline-dark"
          as={Link}
          to="/perfil"
          className="w-100 mb-5"
        >
          Perfil
        </Button>
      </Container>
    </>
  );
}
