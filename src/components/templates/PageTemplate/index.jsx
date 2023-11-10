import PropTypes from 'prop-types';
import Header from '../../base/Header';
import Footer from '../../base/Footer';

export default function PageTemplate({ title, description, children }) {
  return (
    <>
      <Header title={title} description={description} />
      {children}
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
