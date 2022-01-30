import { Container } from "./styles";

interface inputProps {
  titulo: string;
  mensagemQuantidade: string;
  mensagemValor: string;
  Quantidade: number;
  setQuantidade: any;
  Valor_atual: number;
  muda_valor: any;
}
export function Calculadora(props: inputProps) {
  const {
    titulo,
    mensagemQuantidade,
    mensagemValor,
    Valor_atual,
    muda_valor,
    Quantidade,
    setQuantidade,
  } = props;

  return (
    <Container>
      <h2>{titulo}</h2>

      <input
        type="number"
        placeholder={mensagemQuantidade}
        value={Quantidade}
        onChange={(event) => setQuantidade(event.target.value)}
      />

      <input
        type="currey"
        placeholder={mensagemValor}
        value={Valor_atual}
        onChange={(event) => muda_valor(event.target.value)}
      />
    </Container>
  );
}
