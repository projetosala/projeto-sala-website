import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function ArticleCardTemplate({
  title, description, children, onClick,
}) {
  return (
    <article className={styles.container} onClick={onClick} aria-hidden="true">
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
    </article>
  );
}

ArticleCardTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

ArticleCardTemplate.defaultProps = {
  onClick: () => { },
};
