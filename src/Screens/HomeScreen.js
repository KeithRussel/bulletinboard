import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import Articles from "../Components/Articles/Articles";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import { MdOutlineAddCircle } from "react-icons/md";

const AddArticleRoute = styled.span`
  position: fixed;
  left: auto;
  right: 25px;
  bottom: 25px;
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
        <Link to="addarticle">
          <MdOutlineAddCircle size={50} color={"#29203D"} />
        </Link>
      </AddArticleRoute>
    </div>
  );
};

export default HomeScreen;
