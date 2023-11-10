import PropTypes from 'prop-types';
import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate';
import SectionHeader from '../components/base/SectionHeader';
import ParticipantCard from '../components/cards/ParticipantCard';

import participantsData from '../data/project/participants.json';
import projectContent from '../data/project/project_page_content.json';
import GoalsBox from '../components/GoalsBox';
import { getProjectHistoryPost } from '../controllers/blogController';
import CtaSection from '../components/base/CtaSection';
import shortPostContent from '../utils/shortPostContent';

export default function TheProject({ history }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="gamificação, alagoas, biomas" />
        <meta name="description" content="Um pouco do que inspirou esta iniciativa, quem nós somos e o que conseguimos construir" />
        <title>O Projeto</title>
      </Head>
      <PageTemplate
        title="O Projeto"
        description="Um pouco do que inspirou esta iniciativa, quem nós somos e o que conseguimos construir"
      >
        <CtaSection
          title="A história"
          text={shortPostContent(history.content, 1000)}
          actionText="Continue lendo"
          target={history.url}
          isExternalTarget
        />
        <GoalsBox
          title="Objetivos"
          goals={projectContent.goals}
        />
        <SectionHeader
          title="Membros"
          description="Todos os membros que fazem e que fizeram parte do projeto"
        />
        <ParticipantList participants={participantsData.participants} />
      </PageTemplate>
    </>
  );
}

function ParticipantList({ participants }) {
  return participants.map((participant) => (
    <ParticipantCard key={participant.order} participant={participant} />
  ));
}

export async function getStaticProps() {
  const now = 1;
  const oneWeekInSeconds = 604800;
  const history = await getProjectHistoryPost();
  const whenRevalidate = history ? oneWeekInSeconds : now;

  return { props: { history }, revalidate: whenRevalidate };
}

TheProject.propTypes = {
  history: PropTypes.object.isRequired,
};
