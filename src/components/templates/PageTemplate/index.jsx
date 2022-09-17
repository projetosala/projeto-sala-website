import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';
import Footer from '../../Footer';
import FloatingButton from '../../buttons/FloatingButton';

export default function PageTemplate({ title, description }) {
  return (
    <>
      <Header title={title} description={description} />
      <Footer />
      <FloatingButton />
    </>
  );
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
