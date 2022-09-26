import React from "react";

const Article = ({ article }) => {
  return (
    <div className="card">
      {/* {Object.values(article).map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
