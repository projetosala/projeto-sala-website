import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function InputMessage({ message }) {
  return (
    <textarea
      className={styles.input}
      placeholder={message}
    />
  );
}

InputMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
