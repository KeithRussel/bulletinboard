import styled from "@emotion/styled";
import React, { useState } from "react";
import EditArticleForm from "../Components/Forms/EditArticleForm";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import { useParams, useNavigate, Link } from "react-router-dom";
import { currentDate } from "../utils/currentDate";

const EditArticleScreenMain = styled.div`
  @media (max-width: 600px) {
    max-width: 90%;
  }

  max-width: 50%;
  margin: auto;
`;

const EditArticleScreen = () => {
  const [articleList, setArticleList] = useLocalStorage("articles", []);
  const params = useParams();
  const navigate = useNavigate();

  const found = articleList.find((obj) => obj.id === params.articleId);
  const [title, setTitle] = useState(found.title);
  const [content, setContent] = useState(found.content);
  const [color, setColor] = useState(found.color);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const newState = articleList.map((obj) => {
        if (obj.id === params.articleId) {
          return {
            ...obj,
            title: title,
            content: content,
            color: color,
            date: currentDate(),
          };
        }

        return obj;
      });

      await setArticleList(newState);
      console.log(newState);
      setTitle("");
      setContent("");
      // setTimeout(navigate("/"), 5000);
      navigate("/");
    } catch (error) {
      throw new Error("Error 404 not found");
    }
  };

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentOnChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const handleSelectChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <EditArticleScreenMain>
      <Link to="/">Back</Link>
      <EditArticleForm
        title={title}
        content={content}
        handleUpdate={handleUpdate}
        titleOnChangeHandler={titleOnChangeHandler}
        contentOnChangeHandler={contentOnChangeHandler}
        handleSelectChange={handleSelectChange}
      />
    </EditArticleScreenMain>
  );
};

export default EditArticleScreen;
