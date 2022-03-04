import { createContext, useState, ReactNode, SetStateAction } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface CalcProps {
  Tenho_carteira: number;
  setTenho_carteira: (SetStateAction: number) => void;
  Valor_carteira: number;
  setValor_carteira: (SetStateAction: number) => void;

  Compra_mercado: number;
  setCompra_mercado: (SetStateAction: number) => void;

  Valor_mercado: number;
  setValor_mercado: (SetStateAction: number) => void;

  precoMedio: number;
  setPrecoMedio: (SetStateAction: number) => void;

  total_quantidade: number;
  total_valor: number | bigint;

  Calcular: Function;
}

interface PropsProps {
  children?: ReactNode;
}

export const CalcContext = createContext<CalcProps>({} as CalcProps);

export function CalcProvider(props: { children: PropsProps }) {
  const navigate = useNavigate();

  const [Tenho_carteira, setTenho_carteira] = useState<number>(Number);
  const [Valor_carteira, setValor_carteira] = useState<number>(Number);

  const [Compra_mercado, setCompra_mercado] = useState<number>(Number);
  const [Valor_mercado, setValor_mercado] = useState<number>(Number);

  const [total_quantidade, setTotal_quantidade] = useState<number>(Number);
  const [total_valor, seTtotal_valor] = useState<number>(Number);

  const [precoMedio, setPrecoMedio] = useState<number>(0);

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
      return Swal.fire("Digite algum valor primeiro");
    }

    setTotal_quantidade(
      (preve) => (preve = Number(Tenho_carteira) + Number(Compra_mercado))
    );

    seTtotal_valor(
      (preve) =>
        (preve =
          Number(Valor_carteira) * Tenho_carteira +
          Number(Valor_mercado) * Compra_mercado)
    );

    navigate("/resultado");
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
        total_quantidade,
        precoMedio,
        setPrecoMedio,
        total_valor,
        Calcular,
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
}
