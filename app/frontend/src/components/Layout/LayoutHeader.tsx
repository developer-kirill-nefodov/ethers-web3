import React from 'react';

import Languages from "./Languages";

import {useStoreSelector} from "../../store/hooks";
import {useMediaQuery} from "../../utils/hooks/useMediaQuery";
import {NavigateUrls} from "../../utils/constants/navigate-urls";

import {Div, Img} from "../../styles";
import {NavigateLink, WrapperLayoutHeader} from "./styles";

import IconNftLogo from '../../utils/icons/svg/nfter-logo.svg';
import IconNftLogoText from '../../utils/icons/svg/nfter-logo-w-text.svg';

const LayoutHeader = () => {
  const isMobile = useMediaQuery({type: 'max', size: 'sm'});
  const userData = useStoreSelector(v => v.userData);

  return (
    <WrapperLayoutHeader>
      <NavigateLink to={NavigateUrls.home}>
        <Img
          alt='IconNftLogo'
          loading="lazy"
          src={isMobile ? IconNftLogo : IconNftLogoText}
        />
      </NavigateLink>
      <Div display='flex' margin='0 20px 0 0'>
        <Languages isMobile={isMobile}/>
        {userData.role.name === 'VISITOR' && (
          <Div display='flex' alignItems='center' margin='0 0 0 40px'>
            <NavigateLink margin='0 20px 0 0' to={NavigateUrls.auth.login}>
              Sign in
            </NavigateLink>
            <NavigateLink to={NavigateUrls.auth.create}>
              Sign up
            </NavigateLink>
          </Div>

        )}
      </Div>
    </WrapperLayoutHeader>
  );
};

export default LayoutHeader;
