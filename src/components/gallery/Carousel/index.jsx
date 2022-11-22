import PropTypes from 'prop-types';
import { ArrowRight, ArrowLeft } from 'react-feather';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import SecondaryIconButton from '../../buttons/SecondaryIconButton';

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(() => images[0]);
  const size = images.length - 1;

  useEffect(() => {
    setImage(images[index]);
  }, [index]);

  function previous() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }

  function next() {
    if (index < size) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.previous}>
        <SecondaryIconButton
          onClick={previous}
          Icon={ArrowLeft}
        />
      </div>
      <div className={styles.block}>
        <img className={styles.image} src={image.url} alt={image.legend} />
        <div className={styles.footer}>
          <p className={styles.legend}>{image.legend}</p>
          <p className={styles.year}>{image.year}</p>
        </div>
      </div>
      <div className={styles.next}>
        <SecondaryIconButton
          onClick={next}
          Icon={ArrowRight}
        />
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
