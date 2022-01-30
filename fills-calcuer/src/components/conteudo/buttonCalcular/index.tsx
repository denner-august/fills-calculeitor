import { useContext } from "react";
import { ButtonContainer } from "./styled";
import { CalcContext } from "../../../context/ContextCalc";

export function ButtonCalcular() {
  const { Calcular } = useContext(CalcContext);
  return (
    <ButtonContainer onClick={() => Calcular()}>
      <p>Calcular</p>
    </ButtonContainer>
  );
}
