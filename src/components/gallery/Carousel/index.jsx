import PropTypes from 'prop-types';
import { ArrowRight, ArrowLeft } from 'react-feather';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import SecondaryIconButton from '../../buttons/SecondaryIconButton';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(() => images[0]);

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [currentIndex]);

  function goToBackImage() {
    setCurrentIndex((prevIndex) => {
      const firstIndex = 0;
      const lastIndex = images.length - 1;
      const previousIndex = prevIndex - 1;

      return prevIndex > firstIndex ? previousIndex : lastIndex;
    });
  }

  function goToNextImage() {
    setCurrentIndex((prevIndex) => {
      const firstIndex = 0;
      const maxIndex = images.length - 1;
      const nextIndex = prevIndex + 1;

      return prevIndex < maxIndex ? nextIndex : firstIndex;
    });
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.previous}>
          <SecondaryIconButton onClick={goToBackImage} Icon={ArrowLeft} />
        </div>

        <article className={styles['image-container']}>
          <img
            className={styles.image}
            src={currentImage.url}
            alt={currentImage.legend}
          />

          <footer>
            <p className={styles.legend}>
              {currentImage.legend}
            </p>

            <p>{currentImage.year}</p>
          </footer>
        </article>

        <div className={styles.next}>
          <SecondaryIconButton onClick={goToNextImage} Icon={ArrowRight} />
        </div>
      </div>
    </section>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
