import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../utils/styles";

const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${() => theme.colors.white};
  height: 70px;
  background-color: ${() => theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <>
      <HeaderMain>Bulletin Board</HeaderMain>
    </>
  );
};

export default Header;
