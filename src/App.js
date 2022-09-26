import styled from "@emotion/styled";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import AddArticleScreen from "./Screens/AddArticleScreen";

const Container = styled.div`
  max-width: 70%;
  margin: auto;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route path="/" index element={<HomeScreen />} />
          <Route path="addarticle" element={<AddArticleScreen />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
