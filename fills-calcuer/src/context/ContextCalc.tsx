import { createContext, useState, ReactNode, SetStateAction } from "react";

interface CalcProps {
  Tenho_carteira: number;
  setTenho_carteira: (SetStateAction: number) => void;
  Valor_carteira: number;
  setValor_carteira: (SetStateAction: number) => void;

  Compra_mercado: number;
  setCompra_mercado: (SetStateAction: number) => void;

  Valor_mercado: number;
  setValor_mercado: (SetStateAction: number) => void;
}

interface PropsProps {
  children?: ReactNode;
}

export const CalcContext = createContext<CalcProps>({} as CalcProps);

export function CalcProvider(props: { children: PropsProps }) {
  const [Tenho_carteira, setTenho_carteira] = useState(0);
  const [Valor_carteira, setValor_carteira] = useState(0);
  const [Compra_mercado, setCompra_mercado] = useState(0);
  const [Valor_mercado, setValor_mercado] = useState(0);

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
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}
