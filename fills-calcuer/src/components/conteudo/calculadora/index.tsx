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
  const {
    titulo,
    mensagemQuantidade,
    muda_valor,
    setQuantidade,
    Quantidade,
    Valor_atual,
  } = props;

  return (
    <Container>
      <h2>{titulo}</h2>
      <input
        alt="digite a quantidade  de ações"
        type="number"
        placeholder={mensagemQuantidade}
        value={Quantidade === 0 ? "" : Quantidade}
        onChange={(event) => setQuantidade(event.target.value)}
      />

      <CurrencyInput
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        value={Valor_atual === 0 ? "" : Valor_atual}
        autoComplete="off"
        alt="digite o valor por ação"
        id="input-example"
        name="input-name"
        placeholder="Digite o valor"
        prefix="$"
        defaultValue={""}
        groupSeparator=","
        decimalSeparator="."
        onValueChange={(event) => muda_valor(event)}
      />
    </Container>
  );
}
