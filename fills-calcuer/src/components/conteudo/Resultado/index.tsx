import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CalcContext } from "../../../context/ContextCalc";
import { Container, FinalResultado } from "./styles";

export function Resultado() {
  const { total_quantidade, total_valor } = useContext(CalcContext);
  const navigate = useNavigate();
  return (
    <Container>
      <FinalResultado>
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
      </FinalResultado>
    </Container>
  );
}
