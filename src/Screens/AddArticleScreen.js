import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddArticleForm from "../Components/Forms/AddArticleForm";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import { generateId } from "../utils/generateId";
import uuid from "react-uuid";

const AddArticleScreenMain = styled.div`
  @media (max-width: 600px) {
    max-width: 90%;
  }

  max-width: 50%;
  margin: auto;
`;

const AddArticleScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [articleList, setArticleList] = useLocalStorage("articles", []);

  const addArticle = (title, content) => {
    setArticleList([
      ...articleList,
      {
        id: uuid().slice(0, 6),
        title: title,
        content: content,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(title, content);
    setTitle("");
    setContent("");
    console.log(articleList);
  };

  return (
    <AddArticleScreenMain>
      <Link to="/">Back</Link>
      <AddArticleForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
    </AddArticleScreenMain>
  );
};

export default AddArticleScreen;
