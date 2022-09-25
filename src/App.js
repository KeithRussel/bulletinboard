import styled from "@emotion/styled";
import "./App.css";
import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";

const Container = styled.div`
  max-width: 70%;
  margin: auto;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <HomeScreen />
      </Container>
    </div>
  );
}

export default App;
