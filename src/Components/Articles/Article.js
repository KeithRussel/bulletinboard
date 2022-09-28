import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../utils/styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: ${() => theme.colors.primary};
  padding: 1rem;
  box-shadow: 0px 2px 4px black;
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  flex: auto;
`;

const GroupButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Article = ({ article, deleteHandler }) => {
  return (
    <Card>
      {/* {Object.values(article).map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
      <h2>{article.title}</h2>
      <Paragraph>{article.content}</Paragraph>
      <GroupButton>
        <Link to={`/editarticle/${article.id}`}>
          <FaEdit size={20} />
        </Link>
        <FaTrash size={20} onClick={() => deleteHandler(article.id)} />
      </GroupButton>
    </Card>
  );
};

export default Article;
