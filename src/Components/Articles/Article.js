import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../utils/styles";
import { FaTrash, FaEdit } from "react-icons/fa";

const Card = styled.div`
  background-color: ${() => theme.colors.primary};
  padding: 1rem;
  box-shadow: 0px 2px 4px black;
`;

const Article = ({ article, deleteHandler }) => {
  return (
    <Card>
      {/* {Object.values(article).map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div>
        <FaEdit size={20} />
        <FaTrash size={20} onClick={() => deleteHandler(article.id)} />
      </div>
    </Card>
  );
};

export default Article;
