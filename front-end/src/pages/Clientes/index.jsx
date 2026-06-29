import './index.css'

import { useEffect, useState } from "react";

import ClienteForm from "../../components/ClienteForm";
import ClienteList from "../../components/ClienteList";

import api from "../../service/api";

import "./index.css";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  async function carregarClientes() {
    try {
      const resposta = await api.get("/clientes");
      setClientes(resposta.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <main className="clientes">
      <ClienteForm atualizarLista={carregarClientes} />

      <ClienteList clientes={clientes} />
    </main>
  );
}