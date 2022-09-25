import React from "react";

const Article = ({ article }) => {
  return (
    <div className="card">
      {Object.values(article).map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default Article;
