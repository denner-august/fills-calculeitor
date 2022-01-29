import { Container } from "./styles";

interface inputProps {
  titulo: string;
  mensagemQuantidade: string;
  mensagemValor: string;
}
export function Calculadora(props: inputProps) {
  const { titulo, mensagemQuantidade, mensagemValor } = props;

  return (
    <Container>
      <h2>{titulo}</h2>
      <input type="number" placeholder={mensagemQuantidade} />
      <input type="number" placeholder={mensagemValor} />
    </Container>
  );
}
