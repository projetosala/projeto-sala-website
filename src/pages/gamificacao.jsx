import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate';

export default function Gamification() {
  return (
    <>
      <Head>
        <meta name="keywords" content="realidade aumentada, RPG, tabuleiro" />
        <meta name="description" content="Você quer aprender ou se divertir? E que tal os dois?" />
        <title>Gamificação</title>
      </Head>

      <PageTemplate
        title="Gamificação"
        description="Você quer aprender ou se divertir? E que tal os dois?"
      />
    </>
  );
}
