import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function ParticipantCard({ participant }) {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <span className={styles.content}>
          <img className={styles.image} src={participant.image} alt="imagem do participante" />
          <span className={styles.informations}>
            <p className={styles.name}>{participant.name}</p>
            <p className={styles.function}>{participant.function}</p>
          </span>
          <span className={styles.networks}>
            {/* Botões das redes */}
          </span>
        </span>
        <span className={styles['informations-mobile']}>
          <p className={styles.name}>{participant.name}</p>
          <p className={styles.function}>{participant.function}</p>
        </span>
        <span>
          <p>{participant.bio}</p>
        </span>
      </div>
    </article>
  );
}

ParticipantCard.propTypes = {
  participant: PropTypes.object.isRequired,
};
