import styles from "./styles.module.scss";

interface ValoresProps {
  Titulo?: string;
  CarteiraPlaceholder?: string;
  ValorPlaceholder?: string;

  açõesQuantidade: number;
  açõesPreço: number;

  dispatch: (objeto: {
    userAçõesQuantidade: number;
    userPreçoAções: number;
    QuantiCompraAções: number;
    CompraPreçoAções: number;
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
        value={açõesQuantidade === 0 ? "" : açõesQuantidade}
        placeholder={CarteiraPlaceholder}
        type="number"
        onChange={(event) =>
          usuario
            ? dispatch({
                userAçõesQuantidade: Number(event.target.value),
                userPreçoAções: açõesPreço,
                QuantiCompraAções: 0,
                CompraPreçoAções: 0,
              })
            : dispatch({
                userAçõesQuantidade: 0,
                userPreçoAções: 0,
                QuantiCompraAções: Number(event.target.value),
                CompraPreçoAções: açõesPreço,
              })
        }
      />

      <input
        value={açõesPreço === 0 ? "" : açõesPreço}
        placeholder={ValorPlaceholder}
        type="number"
        onChange={(event) =>
          usuario
            ? dispatch({
                userAçõesQuantidade: açõesQuantidade,
                userPreçoAções: Number(event.target.value),
                QuantiCompraAções: 0,
                CompraPreçoAções: 0,
              })
            : dispatch({
                userAçõesQuantidade: 0,
                userPreçoAções: 0,
                QuantiCompraAções: açõesQuantidade,
                CompraPreçoAções: Number(event.target.value),
              })
        }
      />
    </div>
  );
}
