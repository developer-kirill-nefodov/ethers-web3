import React from 'react';

import LogoHeader from "./Logo";
import RoleHeader from "./RoleHeader";

import {useMediaQuery} from "../../../utils/hooks/useMediaQuery";

import {WrapperLayoutHeader} from "../styles";

const LayoutHeader = () => {
  const isMobile = useMediaQuery({type: 'max', size: 'sm'});

  return (
    <WrapperLayoutHeader>
      <LogoHeader isMobile={isMobile}/>
      <RoleHeader isMobile={isMobile}/>
    </WrapperLayoutHeader>
  );
};

export default LayoutHeader;
