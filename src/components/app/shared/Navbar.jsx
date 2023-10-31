import { useState } from "react";

// react-router-dom
import { NavLink, Link } from "react-router-dom";

// css
import "./../../../assets/css/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Colegio de arquitectos de Comitán
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/agremiados">Agremiados</NavLink>
        </li>
        <li>
          <NavLink to="/sesion">Documentos</NavLink>
        </li>
      </ul>
    </nav>
  );
}
