import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function PrimaryButton({ title, onClick, Icon }) {
  return (
    <button className={styles.container} type="button" onClick={onClick}>
      {title}
      {Icon && <Icon size={20} strokeWidth={2.5} />}
    </button>
  );
}

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.object,
};

PrimaryButton.defaultProps = {
  Icon: null,
};
