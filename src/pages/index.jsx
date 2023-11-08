import CtaSection from '../components/base/CtaSection';
import PageTemplate from '../components/templates/PageTemplate';
import Carousel from '../components/gallery/Carousel';

import homeContent from '../data/home_page_content.json';
import galleryContent from '../data/gallery_content.json';

export default function Index() {
  return (
    <PageTemplate
      title="Projeto S.A.L.A"
      description="Uma abordagem lúdica sobre a importância da preservação do meio ambiente alagoano"
    >
      <>
        <CtaSection
          title="S.A.L.A"
          text={homeContent.intro}
          actionText="Conheça o projeto"
          target="/o-projeto"
        />
        <Carousel images={galleryContent.images} />
      </>
    </PageTemplate>
  );
}
