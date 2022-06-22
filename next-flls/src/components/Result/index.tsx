import { ButtonCalcular } from "../buttonCalcular";

import stylesContainerInput from "../inputValores/styles.module.scss";
import { useContext } from "react";
import { FllsContext } from "../../../context/Context";
import { ResultComponent } from "./Result_Component";

export function Result() {
  const { setMostraResult } = useContext(FllsContext);

  return (
    <div className={stylesContainerInput.Container}>
      <ResultComponent titulo="Nova Quantidade Total" />
      <ResultComponent titulo="Seu Novo Valor Total" />
      <ResultComponent titulo="Novo preço médio" />

      <ButtonCalcular
        nomeButton="Voltar"
        funcaoChamada={() => setMostraResult(false)}
      />
    </div>
  );
}
