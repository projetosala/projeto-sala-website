/* eslint-disable react/button-has-type */
import { X } from 'react-feather';
import styles from './styles.module.css';
import PrimaryButton from '../../buttons/PrimaryButton';

// eslint-disable-next-line react/prop-types
export default function FeedbackPopup({ onClose = () => {} }) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <header className={styles.titleIcon}>
          <h1 className={styles.title}>Deixar opinião</h1>
          <button className={styles.buttonIcon} onClick={onClose}>
            <X />
          </button>

        </header>
        <p className={styles.text}>
          O que você está achando do nosso site? Gostou? Tem alguma sugestão? Sua
          opinião é muito importate, conta pra gente
        </p>
        <textarea
          className={styles.input}
          placeholder="Coloque sua opinião aqui..."
        />
        <PrimaryButton className={styles.button} title="Enviar" onClick={{}} />
      </div>
    </div>
  );
}
