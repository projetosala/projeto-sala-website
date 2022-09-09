import React from 'react';
import PropTypes from 'prop-types';
import { Download } from 'react-feather';
import ArticleCardTemplate from '../../templates/ArticleCardTemplate';
import TextButton from '../../buttons/TextButton';

export default function ScientificArticleCard({ title, description, onClick }) {
  return (
    <ArticleCardTemplate
      title={title}
      description={description}
    >
      <TextButton text="Clique para baixar" onClick={onClick} Icon={Download} />
    </ArticleCardTemplate>
  );
}

ScientificArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
