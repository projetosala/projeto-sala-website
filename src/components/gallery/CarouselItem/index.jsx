import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function CarouselItem({
  url, legend, year,
}) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={url} alt={legend} />
      <span className={styles.span}>
        <p className={styles.legend}>{legend}</p>
        <p className={styles.year}>{year}</p>
      </span>
    </div>
  );
}

CarouselItem.propTypes = {
  url: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
