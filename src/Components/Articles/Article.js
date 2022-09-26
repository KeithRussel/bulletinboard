import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../utils/styles";

const Card = styled.div`
  background-color: ${() => theme.colors.primary};
  padding: 1rem;
  box-shadow: 0px 2px 4px black;
`;

const Article = ({ article }) => {
  return (
    <Card>
      {/* {Object.values(article).map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </Card>
  );
};

export default Article;
