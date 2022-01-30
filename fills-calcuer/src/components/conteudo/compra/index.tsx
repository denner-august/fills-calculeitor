import { Calculadora } from "../calculadora";
import { useContext } from "react";
import { CalcContext } from "../../../context/ContextCalc";

export function Compra() {
  const { Compra_mercado, setCompra_mercado, Valor_mercado, setValor_mercado } =
    useContext(CalcContext);
  return (
    <Calculadora
      titulo="Compra"
      mensagemQuantidade="Digite a quantidade de ações "
      mensagemValor="Digite o valor"
      Quantidade={Compra_mercado}
      setQuantidade={setCompra_mercado}
      Valor_atual={Valor_mercado}
      muda_valor={setValor_mercado}
    />
  );
}
