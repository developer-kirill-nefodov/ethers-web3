import {useEffect, useState} from "react";
import {useTheme} from "styled-components";

import type {IBreakpointsName, ITheme} from "../../theme";

interface IUseMediaQuery {
  size: IBreakpointsName,
  type: 'min' | 'max'
}

export const useMediaQuery = ({type, size}: IUseMediaQuery) => {
  const {breakpoints} = useTheme() as ITheme;
  const [media, setMedia] = useState(
    window.matchMedia(`(${type}-width: ${breakpoints[size]}px)`).matches
  );

  useEffect(() => {
    const onResize = () => {
      setMedia(window.matchMedia(`(${type}-width: ${breakpoints[size]}px)`).matches);
    }

    window.addEventListener('resize', onResize);
    return () => (
      window.removeEventListener('resize', onResize)
    );
  }, [type, size, breakpoints]);

  return media;
}
