import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function TextButton({ Icon, text, onClick }) {
  return (
    <button className={styles.container} type="button" onClick={onClick}>
      {Icon && <Icon size={15} strokeWidth={2.5} />}
      <span className={styles.text}>{text}</span>
    </button>
  );
}

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
};
