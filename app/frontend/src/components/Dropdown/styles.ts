import styled, {css} from "styled-components";
import {CardShadow} from "../Forms/styles";

export const WrapperDropdown = styled.div`
  position: relative;
`;

export const WrapperMenu = styled.div`
  display: flex;
  justify-items: center;
  cursor: pointer;

  border-radius: .5rem;
  padding: 1.5rem 2rem;

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
`;

interface IWrapperList {
  top: string;
  open: boolean;
}

export const WrapperList = styled(CardShadow)<IWrapperList>`
  right: 0;
  display: none;
  position: absolute;
  background: white;
  border-radius: .5rem;
  top: ${({top}) => top};
  ${({open}) => open && css`
    display: block;
    z-index: 10;
  `};
`;


export const DropdownList = styled.ul`
  margin: 0;
  padding: 1rem 0;
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  min-width: 10rem;
  padding: .5rem 1rem;

  &:hover {
    background: #eaeaea;
  }
`;
