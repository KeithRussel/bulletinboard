import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import EditArticleForm from "../Components/Forms/EditArticleForm";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import { useParams } from "react-router-dom";

const EditArticleScreenMain = styled.div`
  max-width: 50%;
  margin: auto;
`;

const EditArticleScreen = () => {
  const [articleList, setArticleList] = useLocalStorage("articles", []);
  const params = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const editArticle = (id, title, content) => {
  //   setArticleList([
  //     ...articleList,
  //     {
  //       id: id,
  //       title: title,
  //       content: content,
  //     },
  //   ]);
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    const newState = articleList.map((obj) => {
      if (obj.id === params.articleId) {
        return { ...obj, title: title, content: content };
      }

      return obj;
    });

    setArticleList(newState);
    console.log(articleList);
  };

  const titleOnChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentOnChangeHandler = (e) => {
    setContent(e.target.value);
  };

  // useEffect(() => {
  //   const items = localStorage.getItem("articles");
  //   console.log(articleList);
  //   // console.log(content);
  // }, []);

  return (
    <EditArticleScreenMain>
      <EditArticleForm
        title={title}
        content={content}
        handleUpdate={handleUpdate}
        titleOnChangeHandler={titleOnChangeHandler}
        contentOnChangeHandler={contentOnChangeHandler}
      />
    </EditArticleScreenMain>
  );
};

export default EditArticleScreen;
