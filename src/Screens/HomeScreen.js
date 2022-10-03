import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Articles from "../Components/Articles/Articles";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import { MdOutlineAddCircle, MdSettings } from "react-icons/md";

const AddArticleRoute = styled.span`
  position: absolute;
  left: auto;
  right: 25px;
  bottom: 25px;
`;

const SetTheme = styled.span`
  position: absolute;
  left: auto;
  right: 25px;
  bottom: 100px;
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
  const deleteHandler = (id, title) => {
    if (window.confirm(`Are you sure you wish to delete ${title}?`)) {
      const newData = articleList.filter((item) => item.id !== id);

      setArticleList(newData);
      console.log(newData);
    }
  };

  return (
    <div>
      <Articles articles={articleList} deleteHandler={deleteHandler} />
      <AddArticleRoute>
        <Link to="addarticle">
          <MdOutlineAddCircle size={50} color={"#29203D"} />
        </Link>
      </AddArticleRoute>
      <SetTheme>
        <Link to="theme">
          <MdSettings size={50} color={"#29203D"} />
        </Link>
      </SetTheme>
    </div>
  );
};

export default HomeScreen;
