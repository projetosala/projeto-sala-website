import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import SectionHeader from '../../base/SectionHeader';

import content from '../../../data/gamification_content.json';

export default function GamesHorizontalBox() {
  return (
    <article className={styles.article}>
      <SectionHeader
        title="Gamificação"
        description={content.gamification}
      />
      <div className={styles.gamesContainer}>
        {content.games.map((game, index) => (
          <div className={styles.step} key={game.order}>
            <GameCard game={game} />
            {index !== content.games.length - 1 && (
              <div className={styles.line} />
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

function GameCard({ game }) {
  const router = useRouter();
  const goToRoute = () => { router.push(game.route); };

  return (game.isActive ? (
    <button
      className={styles.container}
      type="button"
      onClick={goToRoute}
    >
      <div className={styles.content}>
        <img src={game.imageUrl} className={styles.image} alt={game.name} />
        <p className={styles.name}>{game.name}</p>
      </div>
    </button>
  ) : (
    <div className={`${styles.container} ${styles.hidden} `}>
      <div className={styles.content}>
        <div className={`${styles.elements} ${styles['elements-hidden']} `}>
          <p className={styles.symbol}>?</p>
        </div>
        <p className={styles.name}>Em breve</p>
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
