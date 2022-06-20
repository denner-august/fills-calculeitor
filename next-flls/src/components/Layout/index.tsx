import styles from "./styles.module.scss";
import { Valores } from "../inputValores/index";
import { ButtonCalcular } from "../buttonCalcular";

export function Layout() {
  return (
    <div role="Layout" className={styles.Container}>
      <h1 role="title">Preço Médio</h1>
      <Valores
        Titulo="Carteira"
        CarteiraPlaceholder="Quantas ações Você tem?"
        ValorPlaceholder="Qual o preço?"
      />

      <Valores
        Titulo="Compra"
        CarteiraPlaceholder="Quantas ações você vai compra?"
        ValorPlaceholder="Qual o valor da ação?"
      />

      <ButtonCalcular />
    </div>
  );
}
