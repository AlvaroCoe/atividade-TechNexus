import { Link } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <h2>TechNexus</h2>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/funcionarios">Funcionários</Link>
      </nav>
    </header>
  );
}