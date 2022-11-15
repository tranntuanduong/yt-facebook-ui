import { colors } from "colors";
import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 56px;
  background-color: ${colors.bgColor};
  border-color: ${colors.borderColor};
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.borderColor};
`;

export const StyledLeft = styled.div`
  display: flex;
  column-gap: 8px;
  flex: 1;

  .logo {
    width: 40px;
    height: 40px;
  }

  .search-wrap {
    display: flex;
    align-items: center;
    padding: 2px 16px;
    background-color: ${colors.btnBg};
    border-radius: 50px;
    column-gap: 8px;
  }

  .search-input {
    background-color: transparent;
    border: none;
    color: ${colors.textColor2};
    font-size: 14px;
    min-width: 200px;

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: ${colors.textColor1};
    }
  }
`;

export const NavLink = styled.div`
  display: flex;
  column-gap: 8px;
  width: 100%;
  max-width: 750px;
  justify-content: center;
  align-items: center;
`;

export const StyledRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;
