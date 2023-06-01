import React from 'react';

import {useStoreSelector} from "../../store/hooks";
import {useMediaQuery} from "../../utils/hooks/useMediaQuery";
import {NavigateUrls} from "../../utils/constants/navigate-urls";

import {CustomLink, Div, Img} from "../../styles";
import {WrapperLayoutHeader} from "./styles";

import IconNftLogo from '../../utils/icons/svg/nfter-logo.svg';
import IconNftLogoText from '../../utils/icons/svg/nfter-logo-w-text.svg';

const LayoutHeader = () => {
  const isMobile = useMediaQuery({type: 'max', size: 'sm'});
  const userData = useStoreSelector(v => v.userData);

  return (
    <WrapperLayoutHeader>
      <div>
        <Img
          alt='IconNftLogo'
          loading="lazy"
          src={isMobile ? IconNftLogo : IconNftLogoText}
        />
      </div>
      {userData.role.name === 'VISITOR' && (
        <Div display='flex' margin='0 20px 0 0'>
          <CustomLink margin='0 20px 0 0' to={NavigateUrls.auth.login}>
            Sign in
          </CustomLink>
          <CustomLink to={NavigateUrls.auth.create}>
            Sign up
          </CustomLink>
        </Div>
      )}
    </WrapperLayoutHeader>
  );
};

export default LayoutHeader;
