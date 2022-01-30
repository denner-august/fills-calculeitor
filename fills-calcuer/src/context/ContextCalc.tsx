import { createContext, useState, ReactNode } from "react";
import Swal from "sweetalert2";

interface CalcProps {
  Tenho_carteira: number;
  setTenho_carteira: (SetStateAction: number) => void;
  Valor_carteira: number;
  setValor_carteira: (SetStateAction: number) => void;

  Compra_mercado: number;
  setCompra_mercado: (SetStateAction: number) => void;

  Valor_mercado: number;
  setValor_mercado: (SetStateAction: number) => void;

  Calcular: Function;
}

interface PropsProps {
  children?: ReactNode;
}

export const CalcContext = createContext<CalcProps>({} as CalcProps);

export function CalcProvider(props: { children: PropsProps }) {
  const [Tenho_carteira, setTenho_carteira] = useState(Number);
  const [Valor_carteira, setValor_carteira] = useState(Number);

  const [Compra_mercado, setCompra_mercado] = useState(Number);
  const [Valor_mercado, setValor_mercado] = useState(Number);

  function Calcular() {
    if (
      !Tenho_carteira ||
      Number(Tenho_carteira) === 0 ||
      !Valor_carteira ||
      Number(Valor_carteira) === 0 ||
      !Compra_mercado ||
      Number(Compra_mercado) === 0 ||
      !Valor_mercado ||
      Number(Valor_mercado) === 0
    ) {
      return Swal.fire("Verifique os valores digitados");
    }

    // let total_quantidade = Number(Tenho_carteira) + Number(Compra_mercado);
    // let total_valor = Number(Valor_carteira) + Number(Valor_mercado);
  }

  return (
    <CalcContext.Provider
      value={{
        Tenho_carteira,
        setTenho_carteira,
        Valor_carteira,
        setValor_carteira,
        Compra_mercado,
        setCompra_mercado,
        Valor_mercado,
        setValor_mercado,

        Calcular,
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}
