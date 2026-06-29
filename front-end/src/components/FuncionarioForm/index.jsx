import './index.css'

import { useState } from "react";
import api from "../../service/api";
import "./index.css";

export default function FuncionarioForm({ atualizarLista }) {
  const [funcionario, setFuncionario] = useState({
    nome: "",
    telefone: "",
    email: "",
    cargo: "",
    setor: "",
  });

  function handleChange(e) {
    setFuncionario({
      ...funcionario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrar(e) {
    e.preventDefault();

    try {
      await api.post("/funcionarios", funcionario);

      setFuncionario({
        nome: "",
        telefone: "",
        email: "",
        cargo: "",
        setor: "",
      });

      atualizarLista();
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar funcionário.");
    }
  }

  return (
    <form className="form" onSubmit={cadastrar}>
      <h2>Cadastrar Funcionário</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={funcionario.nome}
        onChange={handleChange}
      />

      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={funcionario.telefone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={funcionario.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="cargo"
        placeholder="Cargo"
        value={funcionario.cargo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="setor"
        placeholder="Setor"
        value={funcionario.setor}
        onChange={handleChange}
      />

      <button>Cadastrar</button>
    </form>
  );
}