import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CtaSection from '../components/base/CtaSection';
import PageTemplate from '../components/templates/PageTemplate';
import Carousel from '../components/gallery/Carousel';
import getContent from '../controllers/getContentController';

export default function Index() {
  const [texts, setTexts] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTexts = await getContent('home_page');
      if (fetchedTexts) {
        setTexts(JSON.parse(fetchedTexts));
      }
      const fetchedImages = await getContent('gallery');
      if (fetchedImages) {
        const imageJson = JSON.parse(fetchedImages);
        setImages(imageJson.images);
      }
    };

    fetchData();
  }, []);

  return (
    <PageTemplate
      title="Projeto S.A.L.A"
      description="Uma abordagem lúdica sobre a importância da preservação do meio ambiente alagoano"
    >
      <PageContent images={images} texts={texts} />
    </PageTemplate>
  );
}

function PageContent({ images, texts }) {
  if (!texts || !images) {
    return <p>Dados não disponíveis. Por favor, tente novamente mais tarde.</p>;
  }

  return (
    <>
      <CtaSection
        title="S.A.L.A"
        text={texts.intro}
        actionText="Conheça o projeto"
        target="/o-projeto"
      />
      <Carousel images={images} />
    </>
  );
}

PageContent.defaultProps = {
  texts: null,
  images: null,
};

PageContent.propTypes = {
  texts: PropTypes.object,
  images: PropTypes.array,
};
