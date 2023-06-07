import React from 'react';

import {useRipple} from "../../utils/hooks/useRipple";

import {ContentSpan, RippleBtn, RippleSpan} from "./styles";

interface IRippleButton {
  onClick?: (e: any) => any;
  children?: JSX.Element | string | number | null;
  color?: string;
  isWrapper?: boolean;
  backgroundBtn?: string;
  backgroundSpn?: string;
  disabled?: boolean
}

const RippleButton = ({
  children,
  color,
  onClick,
  disabled = false,
  isWrapper = true,
  backgroundBtn,
  backgroundSpn
}: IRippleButton) => {
  const [coords, isRippling, onHandleClick] = useRipple();

  return (
    <RippleBtn
      disabled={disabled}
      backgroundColor={backgroundBtn}
      onClick={(e: any) => {
        onHandleClick(e);
        onClick && onClick(e);
      }}
    >
      {isRippling && (
        <RippleSpan
          left={coords.x}
          top={coords.y}
          backgroundColor={backgroundSpn}
        />
      )}
      {isWrapper ? (
        <ContentSpan color={color}>
          {children}
        </ContentSpan>
      ) : children}
    </RippleBtn>
  );
};

export default RippleButton;
