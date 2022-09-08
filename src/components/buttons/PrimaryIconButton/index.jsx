import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function PrimaryIconButton({ onClick, Icon }) {
  return (
    <button className={styles.container} type="button" onClick={onClick}>
      {Icon && <Icon size={24} strokeWidth={2.5} />}
    </button>
  );
}

PrimaryIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.object.isRequired,
};
