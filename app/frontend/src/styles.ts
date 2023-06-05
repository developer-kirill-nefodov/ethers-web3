import styled, {createGlobalStyle} from 'styled-components';
import {Link} from "react-router-dom";

export const AppGlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Nunito', sans-serif;
  }
`;

interface IElement {
  width?: string
  height?: string
  margin?: string
  padding?: string
}

interface IElementDiv extends IElement {
  display?: 'flex' | 'block'
  flexDirection?: 'column' | 'row'
  flexWrap?: 'wrap' | 'nowrap'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between'
}

interface IElementLink {
  color?: string
  margin?: string
  disabled?: boolean
}

export const Img = styled.img<IElement>`
  ${(({width}) => width && `width: ${width}`)};
  ${(({height}) => height && `height: ${height}`)};
  ${(({margin}) => margin && `margin: ${margin}`)};
  ${(({padding}) => padding && `padding: ${padding}`)};
  pointer-events: none;
`;

export const Div = styled.div<IElementDiv>`
  ${(({display}) => display && `display: ${display}`)};
  ${(({flexDirection}) => flexDirection && `flex-direction: ${flexDirection};`)};
  ${(({flexWrap}) => flexWrap && `flex-wrap: ${flexWrap};`)};
  ${(({width}) => width && `width: ${width};`)};
  ${(({height}) => height && `height: ${height};`)};
  ${(({margin}) => margin && `margin: ${margin};`)};
  ${(({padding}) => padding && `padding: ${padding};`)};
  ${(({alignItems}) => alignItems && `align-items: ${alignItems};`)};
  ${(({justifyContent}) => justifyContent && `justify-content: ${justifyContent};`)};
`;

export const CustomLink = styled(Link)<IElementLink>`
  ${(({color}) => color && `color: ${color};`)};
  ${(({margin}) => margin && `margin: ${margin};`)};
  ${(({disabled}) => disabled && `opacity: .5; pointer-events: none;`)};
  text-align: center;
  text-decoration: none;
`;

export const Btn = styled.button`
  font-size: .75rem;
  cursor: pointer;
  letter-spacing: .1em;
  padding: .5rem 1rem;
  border-color: transparent;
  border-radius: 0.375rem;
`;

export const Input = styled.input`
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-size: 1rem;
  border: 1px ${({theme}) => theme.colors.border} solid;
  padding: .75rem;
  border-radius: .5rem;

  &:focus-visible {
    outline-color: #6366f1;
  }
`;
