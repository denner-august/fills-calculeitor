import { Valores } from "../inputValores/index";
import { ButtonCalcular } from "../buttonCalcular";
import { useContext, useEffect } from "react";
import { FllsContext } from "../../../context/Context";

import { Result } from "../Result/index";
import { BackgroundLayout } from "../background/backgroundLayout";
import Swal from "sweetalert2";

interface novosValores {
  novaQuantidade: number;
  novoValorTotal: number;
  precoMedio: number;
}

export function Layout() {
  const { mostraResult } = useContext(FllsContext);

  const {
    usuario: { userAçõesQuantidade, userPreçoAções },
    ações: { CompraPreçoAções, QuantiCompraAções },
    setPrecoMedio,
    setAções,
    setUserAçõesQuantidade,
    setMostraResult,
  } = useContext(FllsContext);

  const valores = [
    userAçõesQuantidade,
    userPreçoAções,
    CompraPreçoAções,
    QuantiCompraAções,
  ];

  function VerificaValores() {
    const buscar = valores.includes(0);

    if (buscar) {
      return Swal.fire("Preencha todos os campos", "", "error");
    }

    calcularPrecoMedio();
  }

  function calcularPrecoMedio() {
    const novaQuantidade =
      Number(userAçõesQuantidade) + Number(QuantiCompraAções);

    const novoValorTotal =
      Number(userAçõesQuantidade) * Number(userPreçoAções) +
      Number(QuantiCompraAções) * Number(CompraPreçoAções);

    const precoMedio = novoValorTotal / novaQuantidade;

    const novosValores = {
      novaQuantidade,
      novoValorTotal,
      precoMedio,
    };

    MostraValores(novosValores);
  }

  function MostraValores(novosValores: novosValores) {
    setPrecoMedio({
      quantidadeTotal: novosValores.novaQuantidade,
      valorTotal: novosValores.novoValorTotal,
      novoPrecoMedio: novosValores.precoMedio,
    });

    setMostraResult(true);
  }

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
            funcaoChamada={VerificaValores}
          />
        </BackgroundLayout>
      )}
    </>
  );
}
