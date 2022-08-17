import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';

export default function PageTemplate({ title, description }) {
  return (
    <Header title={title} description={description} />
  );
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
