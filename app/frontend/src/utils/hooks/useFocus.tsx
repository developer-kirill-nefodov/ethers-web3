import { useRef } from "react";

export const useFocus = () => {
  const htmlElRef = useRef<HTMLElement>(null);
  const setFocus = (isBlur: boolean) => {
    if(isBlur) {
      htmlElRef.current && htmlElRef.current.blur();
    } else {
      htmlElRef.current && htmlElRef.current.focus();
    }
  };

  return [htmlElRef, setFocus];
};
