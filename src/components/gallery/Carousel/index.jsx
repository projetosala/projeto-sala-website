import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, ArrowLeft } from 'react-feather';
import styles from './styles.module.css';
import CarouselItem from '../CarouselItem';
import SecondaryIconButton from '../../buttons/SecondaryIconButton';

let indexAtual = 0;
function next(images) {
  const size = images.length;
  for (let i = 0; i < size; i + 1) {
    if (i !== indexAtual) {
      // images[i].style.display = 'none';
    }
  }
}

function index(number, images) {
  if (number === -1) {
    indexAtual -= 1;
  } else {
    indexAtual += 1;
  }
  next(images);
}

export default function Carousel({ images }) {
  const ImagesList = useCallback(() => {
    if (Array.isArray(images)) {
      return images.map((image) => (
        <CarouselItem
          url={image.url}
          legend={image.legend}
          year={image.year}
        />
      ));
    }

    return null;
  }, [images]);

  return (
    <div className={styles.container}>
      <SecondaryIconButton onClick={index(-1, images)} Icon={ArrowLeft} />
      <ImagesList />
      <SecondaryIconButton onClick={index(1, images)} Icon={ArrowRight} />
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
