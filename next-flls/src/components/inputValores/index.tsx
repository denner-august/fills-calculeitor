import styles from "./styles.module.scss";
import CurrencyInput from "react-currency-input-field";

interface ValoresProps {
  Titulo?: string;
  CarteiraPlaceholder?: string;
  ValorPlaceholder?: string;

  açõesQuantidade?: number;
  açõesPreço?: number;

  dispatch: (objeto: {
    userAçõesQuantidade?: number;
    userPreçoAções?: number;
    QuantiCompraAções?: number;
    CompraPreçoAções?: number;
  }) => void;

  usuario?: Boolean;
}

export function Valores({
  Titulo = "Carteira",
  CarteiraPlaceholder = "Digite o numero de ações",
  ValorPlaceholder = "Digite o valor",
  açõesQuantidade,
  açõesPreço,

  dispatch,
  usuario,
}: ValoresProps) {
  return (
    <div className={styles.Container}>
      <h2>{Titulo}</h2>

      <input
        value={
          açõesQuantidade === 0 || açõesQuantidade === undefined
            ? ""
            : açõesQuantidade
        }
        placeholder={CarteiraPlaceholder}
        type="number"
        onChange={(event) =>
          usuario
            ? dispatch({
                userAçõesQuantidade: Number(event.target.value),
                userPreçoAções: açõesPreço,
              })
            : dispatch({
                QuantiCompraAções: Number(event.target.value),
                CompraPreçoAções: açõesPreço,
              })
        }
      />

      <input
        value={
          açõesPreço === 0 || açõesPreço === undefined || isNaN(açõesPreço)
            ? ""
            : açõesPreço
        }
        placeholder={ValorPlaceholder}
        type="number"
        onChange={(event) =>
          usuario
            ? dispatch({
                userAçõesQuantidade: açõesQuantidade,
                userPreçoAções: Number(event.target.value),
              })
            : dispatch({
                QuantiCompraAções: açõesQuantidade,
                CompraPreçoAções: Number(event.target.value),
              })
        }
      />
    </div>
  );
}
