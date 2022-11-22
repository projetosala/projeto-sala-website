import PropTypes from 'prop-types';
import CtaSection from '../components/base/CtaSection';
import PageTemplate from '../components/templates/PageTemplate';
import getPageContent from '../controllers/pageContentController';
import Carousel from '../components/gallery/Carousel';
import getImages from '../controllers/galleryController';

export default function Index({ images, texts }) {
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
    window.location.reload();
    return null;
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

export async function getStaticProps() {
  const now = 0;
  const oneWeekInSeconds = 604800;
  let texts = null;
  let images = null;

  await Promise.all([getPageContent('home'), getImages()]).then((values) => {
    [texts, images] = values;
  });

  const whenRevalidate = (texts && images) ? oneWeekInSeconds : now;

  return { props: { images, texts }, revalidate: whenRevalidate };
}

Index.propTypes = {
  texts: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

PageContent.propTypes = {
  texts: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};
