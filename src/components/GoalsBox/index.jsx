import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

export default function GoalsBox({ title, goals }) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <ul className={styles.goals}>
          {goals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

GoalsBox.propTypes = {
  title: PropTypes.string.isRequired,
  goals: PropTypes.arrayOf(PropTypes.string).isRequired,
};
