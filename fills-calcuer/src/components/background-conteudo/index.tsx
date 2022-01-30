import { ButtonCalcular } from "../conteudo/buttonCalcular";
import { Carteira } from "../conteudo/carteira";
import { Compra } from "../conteudo/compra";
import { Container } from "./styles";

export function BackgroundConteudo() {
  return (
    <Container>
      <h1>Preço médio</h1>
      <Carteira />
      <Compra />
      <ButtonCalcular />
    </Container>
  );
}
