import { ButtonCalcular } from "../buttonCalcular";
import styles from "./styles.module.scss";

import stylesContainerInput from "../inputValores/styles.module.scss";
import { useContext } from "react";
import { FllsContext } from "context/Context";
export function Result() {
  const { setMostraResult } = useContext(FllsContext);

  return (
    <div className={stylesContainerInput.Container}>
      <h2>Nova Quantidade Total</h2>
      <input type="text" />
      <h2>Seu Novo Valor Total</h2>
      <input type="text" />
      <h2>Novo preço médio</h2>
      <input type="text" />
      <ButtonCalcular
        nomeButton="Voltar"
        funcaoChamada={() => setMostraResult(false)}
      />
    </div>
  );
}
