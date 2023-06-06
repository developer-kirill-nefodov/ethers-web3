import React from 'react';

import {useRipple} from "../../utils/hooks/useRipple";

import {ContentSpan, RippleBtn, RippleSpan} from "./styles";

interface IRippleButton {
  onClick: (e: any) => any;
  children?: JSX.Element | string | number;
  color?: string;
  backgroundBtn?: string;
  backgroundSpn?: string;
}

const RippleButton = ({onClick, children, backgroundBtn, backgroundSpn}: IRippleButton) => {
  const [coords, isRippling, onHandleClick] = useRipple();

  return (
    <RippleBtn
      backgroundColor={backgroundBtn}
      onClick={(e: any) => {
        onHandleClick(e);
        onClick(e);
      }}
    >
      {isRippling && (
        <RippleSpan
          left={coords.x}
          top={coords.y}
          backgroundColor={backgroundSpn}
        />
      )}
      <ContentSpan>
        {children}
      </ContentSpan>
    </RippleBtn>
  );
};

export default RippleButton;
