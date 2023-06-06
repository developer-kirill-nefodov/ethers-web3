import React from 'react';

import {NavigateUrls} from "../../../utils/constants/navigate-urls";

import {Img} from "../../../styles";
import {NavigateLink} from "../styles";

import IconNftLogo from "../../../utils/icons/svg/nfter-logo.svg";
import IconNftLogoText from "../../../utils/icons/svg/nfter-logo-w-text.svg";

interface ILogoHeader {
  isMobile: boolean;
}

const LogoHeader = ({isMobile}: ILogoHeader) => {
  return (
    <NavigateLink to={NavigateUrls.home}>
      <Img
        alt='IconNftLogo'
        loading="lazy"
        src={isMobile ? IconNftLogo : IconNftLogoText}
      />
    </NavigateLink>
  );
};

export default LogoHeader;
