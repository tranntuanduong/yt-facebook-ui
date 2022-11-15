import { colors } from "colors";
import styled from "styled-components";

const StyledBtn = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${colors.btnBg};
  }
`;

export const StyledNavLinkIcon = styled(StyledBtn)`
  padding: 10px 36px;
  border-radius: 10px;
`;

export const StyledCycleIcon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnBg};
  cursor: pointer;

  &:hover {
    background-color: ${colors.btnHoverColor};
  }
`;

export const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const StyledDivider = styled.div`
  border: 0.5px solid ${colors.borderColor};
  margin: 8px 0;
`;
