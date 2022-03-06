import { Container } from "./styles";
import CurrencyInput from "react-currency-input-field";

interface inputProps {
  titulo: string;
  mensagemQuantidade: string;
  mensagemValor: string;
  Quantidade: undefined | number;
  setQuantidade: any;
  Valor_atual: undefined | number;
  muda_valor: any;
}
export function Calculadora(props: inputProps) {
  const { titulo, mensagemQuantidade, muda_valor, setQuantidade } = props;

  return (
    <Container>
      <h2>{titulo}</h2>
      <input
        alt="digite a quantidade  de ações"
        type="number"
        placeholder={mensagemQuantidade}
        onChange={(event) => setQuantidade(event.target.value)}
      />

      <CurrencyInput
        alt="digite o valor por ação"
        id="input-example"
        name="input-name"
        placeholder="Digite o valor"
        prefix="$"
        defaultValue={""}
        decimalsLimit={2}
        groupSeparator=","
        decimalSeparator="."
        onValueChange={(event) => muda_valor(event)}
      />
    </Container>
  );
}
