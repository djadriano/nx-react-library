import styles from './ui.module.css';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>
        Welcome to Ui! test again and again again again and again again again
        again again again foo again again again again again again again
      </h1>
    </div>
  );
}

export default Ui;
