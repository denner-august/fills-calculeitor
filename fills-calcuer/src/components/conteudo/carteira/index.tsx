import { useContext } from "react";
import { Calculadora } from "../calculadora";
import { CalcContext } from "../../../context/ContextCalc";

export function Carteira() {
  const {
    Tenho_carteira,
    setTenho_carteira,
    Valor_carteira,
    setValor_carteira,
  } = useContext(CalcContext);

  return (
    <Calculadora
      titulo="Carteira"
      mensagemQuantidade="Digite o numero de ações"
      mensagemValor="Digite o valor"
      Quantidade={Tenho_carteira}
      Valor_atual={Valor_carteira}
      setQuantidade={setTenho_carteira}
      muda_valor={setValor_carteira}
    />
  );
}
