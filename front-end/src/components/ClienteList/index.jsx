import './index.css'

export default function ClienteList({ clientes }) {
  return (
    <div className="lista">
      <h2>Clientes Cadastrados</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CPF</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}