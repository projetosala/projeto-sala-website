import React from 'react';
import { ChevronDown } from 'react-feather';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Header({ title, description, hasChevronDown }) {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      {hasChevronDown

      && (
      <div className={styles.icon}>
        <ChevronDown size={48} />
      </div>
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasChevronDown: PropTypes.bool,
};

Header.defaultProps = {
  hasChevronDown: true,
};
