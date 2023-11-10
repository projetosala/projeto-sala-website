import PropTypes from 'prop-types';
import Head from 'next/head';
import { useCallback } from 'react';
import { ExternalLink } from 'react-feather';
import BlogArticleCard from '../components/cards/BlogArticleCard';
import PageTemplate from '../components/templates/PageTemplate';
import { getPosts } from '../controllers/blogController';
import shortPostContent from '../utils/shortPostContent';
import formatDate from '../utils/formatDate';
import SectionHeader from '../components/base/SectionHeader';
import SecondaryButton from '../components/buttons/SecondaryButton';

export default function Articles({ posts }) {
  const ArticleList = useCallback(() => {
    if (Array.isArray(posts)) {
      return posts.map((post) => (
        <BlogArticleCard
          key={post.id}
          title={post.title}
          description={shortPostContent(post.content)}
          tags={post.label ?? []}
          date={formatDate(post.published)}
          url={post.url}
        />
      ));
    }

    return null;
  }, [posts]);

  function goToBlog() {
    window.open('https://projetosala.blogspot.com', 'blank');
  }

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
      >
        <SectionHeader
          title="Publicações do blog"
          description="As principais publicações que fizemos no blog. Clique no artigo para ler."
        />

        <ArticleList />

        <SecondaryButton
          title="Ver todas as publicações"
          Icon={ExternalLink}
          onClick={() => goToBlog()}
          isInCenter
        />
      </PageTemplate>
    </>
  );
}

export async function getStaticProps() {
  const now = 1;
  const oneWeekInSeconds = 604800;
  const posts = await getPosts();
  const whenRevalidate = posts ? oneWeekInSeconds : now;

  return { props: { posts }, revalidate: whenRevalidate };
}

Articles.propTypes = {
  posts: PropTypes.array.isRequired,
};
