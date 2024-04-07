import styles from "./styles.module.scss";

interface ButtonProps {
  nomeButton: string;
  funcaoChamada: any;
}

export function ButtonCalcular({
  funcaoChamada,
  nomeButton = "Calcular",
}: ButtonProps) {
  return (
    <button onClick={funcaoChamada} className={styles.Button}>
      {nomeButton}
    </button>
  );
}
