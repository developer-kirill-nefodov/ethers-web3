import {useEffect, useState} from "react";

type IUseRippleRes = [{x: number; y: number}, boolean, (v: any) => any]

export const useRipple = (): IUseRippleRes => {
  const [coords, setCoords] = useState({x: -1, y: -1});
  const [isRippling, setIsRippling] = useState(false);

  const onHandleClick = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
  }

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRippling) {
      setCoords({x: -1, y: -1});
    }
  }, [isRippling]);

  return [coords, isRippling, onHandleClick]
}
