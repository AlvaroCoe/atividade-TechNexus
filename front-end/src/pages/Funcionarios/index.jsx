import './index.css'

import { useEffect, useState } from "react";

import FuncionarioForm from "../../components/FuncionarioForm";
import FuncionarioList from "../../components/FuncionarioList";

import api from "../../service/api";

import "./index.css";

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([]);

  async function carregarFuncionarios() {
    try {
      const resposta = await api.get("/funcionarios");
      setFuncionarios(resposta.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  return (
    <main className="funcionarios">
      <FuncionarioForm atualizarLista={carregarFuncionarios} />

      <FuncionarioList funcionarios={funcionarios} />
    </main>
  );
}