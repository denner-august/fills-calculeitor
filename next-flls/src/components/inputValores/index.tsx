import styles from "./styles.module.scss";

interface ValoresProps {
  Titulo?: string;
  CarteiraPlaceholder?: string;
  ValorPlaceholder?: string;
}

export function Valores({
  Titulo = "Carteira",
  CarteiraPlaceholder = "Digite o numero de ações",
  ValorPlaceholder = "Digite o valor",
}: ValoresProps) {
  return (
    <div className={styles.Container}>
      <h2>{Titulo}</h2>
      <input placeholder={CarteiraPlaceholder} type="number" />
      <input placeholder={ValorPlaceholder} type="number" />
    </div>
  );
}
