import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate';

export default function Articles() {
  return (
    <>
      <Head>
        <meta name="keywords" content="analise ambiental, geografia, jogos" />
        <meta name="description" content="Todos os artigos científicos e postagens que publicamos até o momento" />
        <title>Artigos</title>
      </Head>

      <PageTemplate
        title="Artigos"
        description="Todos os artigos científicos e postagens que publicamos até o momento"
      />

    </>
  );
}
