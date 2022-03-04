import { Container, Input } from "./styles";

interface inputProps {
  titulo: string;
  Valores?: bigint | Number | string;
}

export function InputResult({ titulo, Valores }: inputProps) {
  return (
    <Container>
      <p>{titulo}</p>
      <Input>{Valores}</Input>
    </Container>
  );
}
