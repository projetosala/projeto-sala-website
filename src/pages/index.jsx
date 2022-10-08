import PropTypes from 'prop-types';
import CtaSection from '../components/base/CtaSection';
import Carousel from '../components/gallery/Carousel';
import PageTemplate from '../components/templates/PageTemplate';
import getImages from '../controllers/galleryController';
import getPageContent from '../controllers/pageContentController';

export default function Index({ texts, images }) {
  return (
    <PageTemplate
      title="Projeto S.A.L.A"
      description="Uma abordagem lúdica sobre a importância da preservação do meio ambiente alagoano"
    >
      <PageContent texts={texts} />
      <Carousel images={images} />
    </PageTemplate>
  );
}

function PageContent({ texts }) {
  if (!texts) {
    window.location.reload();
    return null;
  }

  return (
    <CtaSection
      title="S.A.L.A"
      text={texts.intro}
      actionText="Conheça o projeto"
      target="/o-projeto"
    />
  );
}

export async function getStaticProps() {
  const now = 0;
  const oneWeekInSeconds = 604800;
  const texts = await getPageContent('home');
  const images = await getImages();
  const whenRevalidate = texts || images ? oneWeekInSeconds : now;

  return { props: { texts, images }, revalidate: whenRevalidate };
}

Index.propTypes = {
  texts: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
};

PageContent.propTypes = {
  texts: PropTypes.object.isRequired,
};
