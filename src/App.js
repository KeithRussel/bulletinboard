import styled from "@emotion/styled";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import AddArticleScreen from "./Screens/AddArticleScreen";
import EditArticleScreen from "./Screens/EditArticleScreen";

const Container = styled.div`
  max-width: 70%;
  margin: auto;
  padding: 15px 0;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/" index element={<HomeScreen />} />
          <Route path="addarticle" element={<AddArticleScreen />} />
          <Route
            path="editarticle/:articleId"
            element={<EditArticleScreen />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
