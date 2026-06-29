import './index.css'

import { useState } from "react";
import api from "../../service/api";

export default function ClienteForm({ atualizarLista }) {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });

  function handleChange(e) {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  }

  async function cadastrar(e) {
    e.preventDefault();

    try {
      await api.post("/clientes", cliente);

      setCliente({
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
      });

      atualizarLista();
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar cliente.");
    }
  }

  return (
    <form className="form" onSubmit={cadastrar}>
      <h2>Cadastrar Cliente</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={cliente.nome}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={cliente.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={cliente.telefone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        value={cliente.cpf}
        onChange={handleChange}
      />

      <button>Cadastrar</button>
    </form>
  );
}