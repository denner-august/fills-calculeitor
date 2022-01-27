import { Container } from "./styles";

interface inputProps {
  titulo: string;
}
export function Calculadora(props: inputProps): JSX.Element {
  const { titulo } = props;

  return (
    <Container>
      <h1>{titulo}</h1>
    </Container>
  );
}
