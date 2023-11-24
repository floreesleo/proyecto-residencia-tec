import { Nav } from "react-bootstrap";

export default function FooterBar() {
  return (
    <>
      <Nav className="justify-content-center" fixed="bottom">
        <Nav.Item>
          <Nav.Link disabled>Colegio de arquitectos de Comitán</Nav.Link>
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
          <Nav.Link eventKey="link-4" disabled>
            +52 (963) 632 6561
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4" disabled>
            arquitectosdecomitan@outlook.es
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
