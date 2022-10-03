import styled from "@emotion/styled";

const Pallete = styled.div`
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: #ececec;

  .blue {
    background-color: #a3e3fd;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid;
  }

  .wood {
    background-color: #eecda3;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid;
  }

  .pinky {
    background-color: #fdd1fc;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 1px solid;
  }

  button {
    margin: 1rem 0;
    width: 150px;
    height: 40px;
    background-color: #29203d;
    color: white;
    border: 1px solid #ccc;
  }
`;

const Theme = ({ onClick, colorName, classColor }) => {
  return (
    <Pallete>
      <h3>{colorName}</h3>
      <div className={classColor}></div>
      <button type="button" onClick={onClick}>
        Set as theme
      </button>
    </Pallete>
  );
};

export default Theme;
