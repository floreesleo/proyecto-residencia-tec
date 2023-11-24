import { Nav, Navbar } from "react-bootstrap";

export default function FooterBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Colegio de arquitectos de Comitán</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}
