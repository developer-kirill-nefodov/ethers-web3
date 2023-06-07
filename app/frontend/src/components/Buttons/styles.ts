import styled, {keyframes} from "styled-components";
import {Btn} from "../../styles";

export const rippleAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

interface IRippleBtn {
  backgroundColor?: string;
}

export const RippleBtn = styled(Btn)<IRippleBtn>`
  border: none;
  margin: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: ${({backgroundColor}) => backgroundColor || '#fff'};

  &:hover {
    opacity: .9;
  }
`;

interface IRippleSpan extends IRippleBtn {
  left?: number;
  top?: number;
}

export const RippleSpan = styled.span<IRippleSpan>`
  top: ${({top}) => `${top || 0}px`};
  left: ${({left}) => `${left || 0}px`};
  width: 20px;
  height: 20px;
  position: absolute;
  display: block;
  content: "";
  border-radius: 50%;
  opacity: .5;
  animation: 1s ease 1 forwards ${rippleAnimation};
  background: ${({backgroundColor}) => backgroundColor || '#63a4ff'};
`;

interface IContentSpan {
  color?: string
}

export const ContentSpan = styled.span<IContentSpan>`
  position: relative;
  z-index: 2;
  font-weight: bold;
  color: ${({color}) => color || '#000'}
`;
