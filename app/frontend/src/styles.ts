import styled, {createGlobalStyle} from 'styled-components';
import {Link} from "react-router-dom";

export const AppGlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Labrada', serif;
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
  text-decoration: none;
`;
