const Theme = ({
  blueskyChangeThemeHandler,
  woodChangeThemeHandler,
  pinkyChangeThemeHandler,
}) => {
  return (
    <div>
      <button onClick={blueskyChangeThemeHandler}>Blue Sky</button>
      <button onClick={woodChangeThemeHandler}>Wood</button>
      <button onClick={pinkyChangeThemeHandler}>Pinky</button>
    </div>
  );
};

export default Theme;
