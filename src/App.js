import styled from "@emotion/styled/macro";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import AddArticleScreen from "./Screens/AddArticleScreen";
import EditArticleScreen from "./Screens/EditArticleScreen";
import ThemeScreen from "./Screens/ThemeScreen";
import { useLocalStorage } from "./Components/LocalStorage/localStorage";
import { useEffect } from "react";

const Container = styled.div`
  @media (max-width: 600px) {
    max-width: 90%;
  }

  max-width: 70%;
  margin: auto;
  padding: 15px 0;
`;

function App() {
  const [colorBackground, setColorBackground] = useLocalStorage("theme", "");

  useEffect(() => {
    document.body.classList = `${colorBackground}`;
  }, []);

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
          <Route
            path="theme"
            element={<ThemeScreen colorBackground={colorBackground} />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
