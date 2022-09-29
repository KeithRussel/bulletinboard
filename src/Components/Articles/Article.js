import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../utils/styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = styled.div`
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
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

const Title = styled.h2`
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const CardBottom = styled.div`
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fffefe;
  padding: 1rem;
  background-color: #00000017;
`;

const Article = ({ article, deleteHandler }) => {
  return (
    <Card>
      {/* {Object.values(article).map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
      <Title>{article.title}</Title>
      <Paragraph>{article.content}</Paragraph>
      <CardBottom>
        <span>{article.date}</span>
        <GroupButton>
          <Link to={`/editarticle/${article.id}`}>
            <FaEdit
              size={20}
              color="#095BE0"
              filter="drop-shadow(2px 2px 1px rgb(0 0 0 / 0.4))"
            />
          </Link>
          <FaTrash
            filter="drop-shadow(2px 2px 1px rgb(0 0 0 / 0.4))"
            size={20}
            onClick={() => deleteHandler(article.id, article.title)}
            color="#ED2125"
          />
        </GroupButton>
      </CardBottom>
    </Card>
  );
};

export default Article;
