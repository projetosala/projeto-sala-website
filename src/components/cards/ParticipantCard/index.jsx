import PropTypes from 'prop-types';
import { Instagram, Linkedin, GitHub } from 'react-feather';
import styles from './styles.module.css';
import SecondaryIconButton from '../../buttons/SecondaryIconButton';

export default function ParticipantCard({ participant }) {
  const handleButtonClick = (link) => {
    window.open(link);
  };

  const formatYearText = () => {
    const { entry, leave } = participant.year;
    if (leave !== null) {
      return `${entry} - ${leave}`;
    }
    return `${entry} - até o momento`;
  };

  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <span className={styles.content}>
          <img className={styles.image} src={participant.image} alt="imagem do participante" />
          <span className={styles.informations}>
            <p className={styles.name}>{participant.name}</p>
            <p className={styles.function}>{participant.function}</p>
            <p className={styles.year}>{formatYearText()}</p>
          </span>
          <span className={styles.networks}>
            {participant.networks && (
              <>
                {participant.networks.github && (
                  <SecondaryIconButton
                    Icon={GitHub}
                    onClick={() => handleButtonClick(participant.networks.github)}
                  />
                )}
                {participant.networks.linkedin && (
                  <SecondaryIconButton
                    Icon={Linkedin}
                    onClick={() => handleButtonClick(participant.networks.linkedin)}
                  />
                )}
                {participant.networks.instagram && (
                  <SecondaryIconButton
                    Icon={Instagram}
                    onClick={() => handleButtonClick(participant.networks.instagram)}
                  />
                )}
              </>
            )}
          </span>
        </span>
        <span className={styles['informations-mobile']}>
          <p className={styles.name}>{participant.name}</p>
          <p className={styles.function}>{participant.function}</p>
          <p className={styles.year}>{formatYearText()}</p>
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
