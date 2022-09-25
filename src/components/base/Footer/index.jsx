import styles from './styles.module.css';

export default function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {date.getFullYear()}
        {' '}
        - Todos os direitos reservados
      </p>
    </footer>
  );
}
