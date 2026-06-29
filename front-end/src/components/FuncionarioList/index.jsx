import "./index.css";

export default function FuncionarioList({ funcionarios }) {
  return (
    <div className="lista">
      <h2>Funcionários Cadastrados</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Cargo</th>
            <th>Setor</th>
          </tr>
        </thead>

        <tbody>
          {funcionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td>{funcionario.nome}</td>
              <td>{funcionario.telefone}</td>
              <td>{funcionario.email}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.setor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}