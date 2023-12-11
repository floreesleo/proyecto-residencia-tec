import { Nav } from "react-bootstrap";

export default function FooterBar() {
  return (
    <>
      <Nav
        className="justify-content-center"
        variant="tabs"
        fixed="bottom"
        style={{ backgroundColor: "#2f3640" }}
      >
        <Nav.Item>
          <Nav.Link disabled style={{ color: "#fff" }}>
            Colegio de arquitectos de Comitán
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            href="https://www.facebook.com/arquitectos.de.comitan"
            target="_blank"
          >
            Facebook
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            href="https://www.instagram.com/arquitectosdecomitan_/"
            target="_blank"
          >
            Instagram
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" disabled style={{ color: "#fff" }}>
            Telefono: +52 (963) 632 6561
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" disabled style={{ color: "#fff" }}>
            arquitectosdecomitan@outlook.es
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
