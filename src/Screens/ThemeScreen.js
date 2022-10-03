import React, { useEffect } from "react";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import Theme from "../Components/Theme/Theme";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Palletes = styled.div`
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 1rem 0;
`;

const ThemeScreen = () => {
  const [colorBackground, setColorBackground] = useLocalStorage("theme", "");

  const blueskyChangeThemeHandler = () => {
    setColorBackground("backgroundBlue");
    document.body.classList = "backgroundBlue";
  };

  const woodChangeThemeHandler = () => {
    setColorBackground("backgroundWood");
    document.body.classList = "backgroundWood";
  };

  const pinkyChangeThemeHandler = () => {
    setColorBackground("backgroundPink");
    document.body.classList = "backgroundPink";
  };

  useEffect(() => {
    document.body.classList = `${colorBackground}`;
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <Palletes>
        <Theme
          onClick={blueskyChangeThemeHandler}
          colorName="Sky Blue"
          classColor="blue"
          colorBackground={colorBackground}
        />
        <Theme
          onClick={woodChangeThemeHandler}
          colorName="Wood"
          classColor="wood"
          colorBackground={colorBackground}
        />
        <Theme
          onClick={pinkyChangeThemeHandler}
          colorName="Pinky"
          classColor="pinky"
          colorBackground={colorBackground}
        />
      </Palletes>
    </div>
  );
};

export default ThemeScreen;
