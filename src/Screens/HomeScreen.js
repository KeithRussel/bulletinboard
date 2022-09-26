import React, { useState } from "react";
import { Link } from "react-router-dom";
import Articles from "../Components/Articles/Articles";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";

const HomeScreen = () => {
  const [articleList, setArticleList] = useLocalStorage("articles", []);
  // const [testData, setTestData] = useState([
  //   {
  //     title: "Sample Title",
  //     content: "Sample Content",
  //   },
  //   {
  //     title: "Sample Title 2",
  //     content: "Sample Content 2",
  //   },
  // ]);

  return (
    <div>
      <Articles articles={articleList} />
      <Link to="addarticle">Add Article</Link>
    </div>
  );
};

export default HomeScreen;
