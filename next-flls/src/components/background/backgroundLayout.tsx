import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface childrenProps {
  children: ReactNode;
}

export function BackgroundLayout({ children }: childrenProps) {
  return (
    <div role="Layout" className={styles.Container}>
      {children}
    </div>
  );
}
