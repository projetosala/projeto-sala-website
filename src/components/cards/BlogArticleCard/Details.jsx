import React from 'react';
import PropTypes from 'prop-types';
import styles from './Details.module.css';

export default function Details({ date, tags }) {
  function getFormatedTags() {
    const formatedTags = (tags.map((tag) => (`#${tag}`)).join(' '));
    return formatedTags;
  }
  return (
    <div className={styles.container}>
      <p className={styles.details}>{date}</p>

      {tags.length > 0 && (
        <>
          <span className={styles.divider}> | </span>
          <p className={styles.details}>{getFormatedTags()}</p>
        </>
      )}
    </div>
  );
}

Details.propTypes = {
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
