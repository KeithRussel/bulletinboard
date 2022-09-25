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
`;

const Header = () => {
  return <HeaderMain>Bulletin Board</HeaderMain>;
};

export default Header;
