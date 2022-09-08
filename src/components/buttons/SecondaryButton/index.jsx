import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function SecondaryButton({ title, onClick, Icon }) {
  return (
    <button className={styles.container} type="button" onClick={onClick}>
      {title}
      {Icon && <Icon size={20} strokeWidth={2.5} />}
    </button>
  );
}

SecondaryButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
};
