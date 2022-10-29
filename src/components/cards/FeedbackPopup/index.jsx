import { X } from 'react-feather';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import PrimaryButton from '../../buttons/PrimaryButton';
import InputMessage from '../../inputs/InputMessage';

export default function FeedbackPopup({ onClose = () => { } }) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Deixar opinião</h1>
          <button className={styles.buttonIcon} onClick={onClose} type="button">
            <X />
          </button>

        </header>
        <p className={styles.text}>
          O que você está achando do nosso site? Gostou? Tem alguma sugestão? Sua
          opinião é muito importate, conta pra gente
        </p>
        <InputMessage message="Coloque sua opinião aqui..." />
        <PrimaryButton title="Enviar" onClick={{}} />
      </div>
    </div>
  );
}

FeedbackPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};
