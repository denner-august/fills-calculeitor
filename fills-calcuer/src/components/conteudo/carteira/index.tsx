import { useContext } from "react";
import { Calculadora } from "../calculadora";
import { CalcContext } from "../../../context/ContextCalc";

export function Carteira() {
  return (
    <Calculadora
      titulo="Carteira"
      mensagemQuantidade="Digite o numero de açoes"
      mensagemValor="digite o valor"
    />
  );
}
