import styles from "./styles.module.scss";
import { Valores } from "../inputValores/index";
import { ButtonCalcular } from "../buttonCalcular";
import { useContext, useState } from "react";
import { FllsContext } from "../../../context/Context";

import { Result } from "../Result/index";

export function Layout() {
  const [mostraResult, setMostraResult] = useState(false); // criar variavel no context para controlar qual component redenrizar

  const {
    usuario: { userAçõesQuantidade, userPreçoAções },
    ações: { CompraPreçoAções, QuantiCompraAções },
    setAções,
    setUserAçõesQuantidade,
  } = useContext(FllsContext);

  return (
    <>
      {mostraResult ? (
        <Result />
      ) : (
        <div role="Layout" className={styles.Container}>
          <h1 role="title">Preço Médio</h1>

          <Valores
            açõesQuantidade={userAçõesQuantidade}
            açõesPreço={userPreçoAções}
            Titulo="Carteira"
            CarteiraPlaceholder="Quantas ações Você tem?"
            ValorPlaceholder="Qual o preço?"
            dispatch={setUserAçõesQuantidade}
            usuario
          />

          <Valores
            açõesPreço={CompraPreçoAções}
            açõesQuantidade={QuantiCompraAções}
            Titulo="Compra"
            CarteiraPlaceholder="Quantas ações você vai compra?"
            ValorPlaceholder="Qual o valor da ação?"
            dispatch={setAções}
          />

          <ButtonCalcular />
        </div>
      )}
    </>
  );
}
