// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../base/Header';
import Footer from '../../base/Footer';
import FloatingButton from '../../buttons/FloatingButton';
// eslint-disable-next-line no-unused-vars
import FeedbackPopup from '../../cards/FeedbackPopup';

export default function PageTemplate({ title, description, children }) {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  return (
    <>
      <Header title={title} description={description} />
      {children}
      <FloatingButton onClick={() => setIsFeedbackVisible(true)} />
      {isFeedbackVisible ? <FeedbackPopup onClose={() => setIsFeedbackVisible(false)} /> : null}
      <Footer />
    </>
  );
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

PageTemplate.defaultProps = {
  children: null,
};
