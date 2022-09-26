import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddArticleForm from "../Components/Forms/AddArticleForm";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";

const AddArticleScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [articleList, setArticleList] = useLocalStorage("articles", []);

  const addArticle = (title, content) => {
    setArticleList([
      ...articleList,
      {
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
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <AddArticleForm
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddArticleScreen;
