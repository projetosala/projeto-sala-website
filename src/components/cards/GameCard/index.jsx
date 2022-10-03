import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight } from 'react-feather';
import styles from './styles.module.css';

export default function GameCard({ game }) {
  return (
    game.isActive ? (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.elements}>
            <img src={game.img} className={styles.image} alt="Imagem do jogo" />
          </div>
          <p className={styles.title}>{game.title}</p>
        </div>
        <ArrowRight className={styles.icon} />
      </div>
    ) : (
      <div className={`${styles.container} ${styles.hidden}`}>
        <div className={styles.content}>
          <div className={`${styles.elements} ${styles['elements-hidden']}`}>
            <p className={styles.symbol}>?</p>
          </div>
          <p className={styles.title}>Em breve</p>
        </div>
      </div>
    )
  );
}

GameCard.propTypes = {
  game: PropTypes.object,
};

GameCard.defaultProps = {
  game: {},
};
