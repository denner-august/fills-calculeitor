import { Layout } from "./Layout";
import styles from "./styles.module.scss";

export function Controller() {
  return (
    <div className={styles.Container}>
      <Layout />
    </div>
  );
}
