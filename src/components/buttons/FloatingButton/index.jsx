import PropTypes from 'prop-types';
import { MessageSquare } from 'react-feather';
import styles from './styles.module.css';

export default function FloatingButton({ Icon, onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {Icon && <Icon size={20} strokeWidth={2.5} />}
    </button>
  );
}

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.object,
};

FloatingButton.defaultProps = {
  Icon: MessageSquare,
};
