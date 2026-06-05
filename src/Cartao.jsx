import "./Cartao.css";

function porcentagem(parte, total) {
  return Math.round((parte / total) * 100);
}

function Cartao() {
  const nome = "Pedro";
  const curso = "Análise e Desenvolvimento de Sistemas";

  const totalAulas = 15;
  const concluidas = 12;

  return (
    <div className="cartao">
      <h3>Sobre Mim</h3>

      <p>Nome: {nome}</p>

      <p>Curso: {curso}</p>

      <p>
        Progresso:
        {" "}
        {porcentagem(concluidas, totalAulas)}%
      </p>

      <p>
        Faltam
        {" "}
        {totalAulas - concluidas}
        {" "}
        aulas.
      </p>

      <ul>
        <li className="destaque">React</li>
        <li>JavaScript</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}

export default Cartao;