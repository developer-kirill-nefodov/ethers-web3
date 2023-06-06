import React from 'react';
import {Blocks} from "react-loader-spinner";

interface ILoading {
  height?: string;
  width?: string;
  color?: string;
  wrapperStyle?: {
    [p: string]: string
  };
}

const LoadingBlock = ({
  height = '40',
  width = '40',
  color = '',
  wrapperStyle = {}
}: ILoading) => {
  return (
    <Blocks
      height={height}
      width={width}
      color={color}
      wrapperStyle={wrapperStyle}
      ariaLabel="loading"
    />
  );
};

export default LoadingBlock;
