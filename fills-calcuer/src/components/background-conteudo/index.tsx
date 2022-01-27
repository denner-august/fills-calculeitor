import { Button_Calcular } from "../conteudo/buttonCalcular";
import { Carteira } from "../conteudo/carteira";
import { Compra } from "../conteudo/compra";
import { Container } from "./styles";

export function Background_conteudo() {
  return (
    <Container>
      <h1>Preço médio</h1>
      <Carteira />
      <Compra />
      <Button_Calcular />
    </Container>
  );
}
