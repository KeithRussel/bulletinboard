import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Articles from "../Components/Articles/Articles";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";

const AddArticleRoute = styled.span`
  position: fixed;
  left: auto;
  right: 0px;
  bottom: 0;
`;

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
      <AddArticleRoute>
        <Link to="addarticle">Add Article</Link>
      </AddArticleRoute>
    </div>
  );
};

export default HomeScreen;
