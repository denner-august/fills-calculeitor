import styles from "./styles.module.scss";
import { useContext } from "react";
import { FllsContext } from "context/Context";

interface ButtonProps {
  nomeButton: string;
  funcaoChamada: any;
}

export function ButtonCalcular({
  funcaoChamada,
  nomeButton = "teste",
}: ButtonProps) {
  // const { setMostraResult } = useContext(FllsContext);

  return (
    <button onClick={funcaoChamada} className={styles.Button}>
      {nomeButton}
    </button>
  );
}
