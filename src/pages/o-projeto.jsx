import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate';
import SectionHeader from '../components/base/SectionHeader';
import ParticipantCard from '../components/cards/ParticipantCard';

import participantsData from '../data/project/participants.json';

export default function TheProject() {
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
