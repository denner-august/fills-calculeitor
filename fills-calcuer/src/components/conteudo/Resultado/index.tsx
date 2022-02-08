import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CalcContext } from "../../../context/ContextCalc";
import { InputResult } from "./inputResult";
import { Container, FinalResultado } from "./styles";

export function Resultado() {
  const { total_quantidade, total_valor } = useContext(CalcContext);
  const navigate = useNavigate();

  return (
    <Container>
      <FinalResultado>
        <InputResult
          Valores={total_quantidade}
          titulo="Nova Quantidade Total"
        />
        <InputResult Valores={total_valor} titulo="Seu Novo Valor Total" />
        <InputResult titulo="titulo" />
        <InputResult titulo="titulo" />

        <button onClick={() => navigate("/")}>Voltar</button>
      </FinalResultado>
    </Container>
  );
}

/* 
  <h2>Resultado</h2>
        <p>
          você tera um novo total de{" "}
          {total_quantidade ? total_quantidade : null} ações
        </p>

        <p>
          seu novo valor total será de{" "}
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(total_valor)}
        </p>

        <button onClick={() => navigate("/")}>Voltar</button>


*/
