import React from "react";
import Article from "./Article";
import styled from "@emotion/styled/macro";

const MainArticles = styled.div`
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`;

const Articles = ({ articles, deleteHandler }) => {
  return (
    <MainArticles>
      {articles.map((article, index) => (
        <Article key={index} article={article} deleteHandler={deleteHandler} />
      ))}
    </MainArticles>
  );
};

export default Articles;
