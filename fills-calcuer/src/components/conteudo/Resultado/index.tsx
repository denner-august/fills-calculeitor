import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CalcContext } from "../../../context/ContextCalc";
import { InputResult } from "./inputResult";
import { Container, FinalResultado } from "./styles";

export function Resultado() {
  const { total_quantidade, total_valor, precoMedio, setPrecoMedio } =
    useContext(CalcContext);
  const navigate = useNavigate();

  useEffect(() => {
    setPrecoMedio(Number(total_valor) / total_quantidade);
  }, []);

  return (
    <Container>
      <FinalResultado>
        <InputResult
          Valores={total_quantidade}
          titulo="Nova Quantidade Total"
        />
        <InputResult
          Valores={new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(total_valor)}
          titulo="Seu Novo Valor Total"
        />
        <InputResult
          titulo="Novo preço médio"
          Valores={new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(precoMedio)}
        />

        <button onClick={() => navigate("/")}>Voltar</button>
      </FinalResultado>
    </Container>
  );
}
