import { Valores } from "../inputValores/index";
import { ButtonCalcular } from "../buttonCalcular";
import { useContext } from "react";
import { FllsContext } from "../../../context/Context";

import { Result } from "../Result/index";
import { BackgroundLayout } from "../background/backgroundLayout";

export function Layout() {
  const { mostraResult } = useContext(FllsContext);

  const {
    usuario: { userAçõesQuantidade, userPreçoAções },
    ações: { CompraPreçoAções, QuantiCompraAções },
    setAções,
    setUserAçõesQuantidade,
    setMostraResult,
  } = useContext(FllsContext);

  return (
    <>
      {mostraResult ? (
        <BackgroundLayout>
          <Result />
        </BackgroundLayout>
      ) : (
        <BackgroundLayout>
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

          <ButtonCalcular
            nomeButton="Calcular"
            funcaoChamada={() => setMostraResult(true)}
          />
        </BackgroundLayout>
      )}
    </>
  );
}
