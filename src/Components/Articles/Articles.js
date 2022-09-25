import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <div id="articles">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
