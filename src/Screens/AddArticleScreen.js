import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddArticleForm from "../Components/Forms/AddArticleForm";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import uuid from "react-uuid";
import { currentDate } from "../utils/currentDate";

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
  const [color, setColor] = useState("yellow");

  const [articleList, setArticleList] = useLocalStorage("articles", []);

  const handleSelectChange = (e) => {
    setColor(e.target.value);
  };

  const addArticle = (title, content, color) => {
    setArticleList([
      ...articleList,
      {
        id: uuid().slice(0, 6),
        title: title,
        content: content,
        color: color,
        date: currentDate(),
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(title, content, color);
    setTitle("");
    setContent("");
    // setColor();
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
        color={color}
        setColor={setColor}
        handleSelectChange={handleSelectChange}
        handleSubmit={handleSubmit}
      />
    </AddArticleScreenMain>
  );
};

export default AddArticleScreen;
