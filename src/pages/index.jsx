import PropTypes from 'prop-types';
import CtaSection from '../components/base/CtaSection';
import PageTemplate from '../components/templates/PageTemplate';
import getPageContent from '../controllers/pageContentController';

export default function Index({ texts }) {
  return (
    <PageTemplate
      title="Projeto S.A.L.A"
      description="Uma abordagem lúdica sobre a importância da preservação do meio ambiente alagoano"
    >
      <PageContent texts={texts} />
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
  const whenRevalidate = texts ? oneWeekInSeconds : now;

  return { props: { texts }, revalidate: whenRevalidate };
}

Index.propTypes = {
  texts: PropTypes.object.isRequired,
};

PageContent.propTypes = {
  texts: PropTypes.object.isRequired,
};
