import { colors } from "colors";
import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  text: string;
}

const ChipLabel = ({ children, text }: Props) => {
  return (
    <StyledChipLabel>
      {children}
      {text && <div className="chip-label">{text}</div>}
    </StyledChipLabel>
  );
};

const StyledChipLabel = styled.div`
  position: relative;
  .chip-label {
    background-color: ${colors.redColor};
    padding: 2px 6px;
    border-radius: 20px;
    color: ${colors.whiteColor};
    position: absolute;
    top: -4px;
    right: -4px;
    font-size: 12px;
  }
`;

export default ChipLabel;
