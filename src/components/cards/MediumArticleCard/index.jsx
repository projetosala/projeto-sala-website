import React from 'react';
import PropTypes from 'prop-types';
import ArticleCardTemplate from '../../templates/ArticleCardTemplate';
import Details from './Details';

export default function MediumArticleCard({
  title, description, date, tags,
}) {
  return (
    <ArticleCardTemplate
      title={title}
      description={description}
    >
      <Details date={date} tags={tags} />
    </ArticleCardTemplate>
  );
}

MediumArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
