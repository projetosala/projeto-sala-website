import PropTypes from 'prop-types';
import React from 'react';
import HTMLReactParser from 'html-react-parser';
import styles from './styles.module.css';

export default function SectionHeader({ title, description }) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>
          {HTMLReactParser(description)}
        </p>
      </div>
    </article>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
