import React, { useEffect } from "react";
import { useLocalStorage } from "../Components/LocalStorage/localStorage";
import Theme from "../Components/Theme/Theme";
import { Link } from "react-router-dom";

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
      <Theme
        colorBackground={colorBackground}
        blueskyChangeThemeHandler={blueskyChangeThemeHandler}
        woodChangeThemeHandler={woodChangeThemeHandler}
        pinkyChangeThemeHandler={pinkyChangeThemeHandler}
      />
    </div>
  );
};

export default ThemeScreen;
