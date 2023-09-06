import NavBar from "../../Nav";
import { Container } from "react-bootstrap";

import AddButtonFolder from "./AddButtonFolder";
import AddButtonFile from "./AddButtonFile";
import UseFolder from "../../../../hooks/UseFolder";

export default function Files() {
  const { folder } = UseFolder();
  return (
    <>
      <NavBar />
      <Container>
        <h2>Gestor de documentos</h2>
        <AddButtonFolder currentFolder={folder} />
        <AddButtonFile />
      </Container>
    </>
  );
}
