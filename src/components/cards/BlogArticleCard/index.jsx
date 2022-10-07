import React from 'react';
import PropTypes from 'prop-types';
import ArticleCardTemplate from '../../templates/ArticleCardTemplate';
import Details from './Details';

export default function BlogArticleCard({
  title, description, date, tags, url,
}) {
  function goToArticlePage() {
    window.open(url, 'blank');
  }

  return (
    <ArticleCardTemplate
      title={title}
      description={description}
      onClick={() => goToArticlePage()}
    >
      <Details date={date} tags={tags} />
    </ArticleCardTemplate>
  );
}

BlogArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};
