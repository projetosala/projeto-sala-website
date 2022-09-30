import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate';

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
      />
    </>

  );
}
