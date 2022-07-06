import { ButtonCalcular } from "../buttonCalcular";

import stylesContainerInput from "../inputValores/styles.module.scss";
import { useContext, useState } from "react";
import { FllsContext } from "../../../context/Context";
import { ResultComponent } from "./Result_Component";

export function Result() {
  const { setMostraResult, precoMedio } = useContext(FllsContext);

  const { quantidadeTotal, valorTotal, novoPrecoMedio } = precoMedio;

  return (
    <div className={stylesContainerInput.Container}>
      <ResultComponent
        titulo="Nova Quantidade Total"
        valores={quantidadeTotal}
      />

      <ResultComponent
        titulo="Seu Novo Valor Total"
        valores={valorTotal.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      />
      <ResultComponent
        titulo="Novo preço médio"
        valores={novoPrecoMedio.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      />

      <ButtonCalcular
        nomeButton="Voltar"
        funcaoChamada={() => setMostraResult(false)}
      />
    </div>
  );
}
