import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  text: string;
}

const ToolTip = ({ children, text }: Props) => {
  return (
    <StyledToolTip>
      {children}
      {text && <div className="tool-tip">{text}</div>}
    </StyledToolTip>
  );
};

const StyledToolTip = styled.div`
  position: relative;

  .tool-tip {
    position: absolute;
    bottom: -36px;
    padding: 8px 0;
    background-color: #ffffff87;
    border-radius: 10px;
    font-size: 12px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 80px;
    text-align: center;
    display: none;
  }

  &:hover .tool-tip {
    display: block;
  }
`;

export default ToolTip;
