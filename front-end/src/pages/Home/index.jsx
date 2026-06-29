import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
  return (
    <main className="home">
      <h1>Bem-vindo ao TechNexus Solutions</h1>

      <p>
        Sistema interno desenvolvido para gerenciamento de clientes e funcionários.
      </p>

      <section className="cards">
        <div className="card">
          <h2>Clientes</h2>

          <p>Cadastre e consulte todos os clientes da empresa.</p>

          <Link to="/clientes" className="btn-home">
            Acessar Clientes
          </Link>
        </div>

        <div className="card">
          <h2>Funcionários</h2>

          <p>Gerencie os colaboradores de forma simples e eficiente.</p>

          <Link to="/funcionarios" className="btn-home">
            Acessar Funcionários
          </Link>
        </div>
      </section>
    </main>
  );
}