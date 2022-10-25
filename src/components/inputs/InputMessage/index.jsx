import styles from './styles.module.css';

export default function InputMessage() {
  return (
    <textarea
      className={styles.input}
      placeholder="Digite aqui..."
    />
  );
}
