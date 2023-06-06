import React from 'react';
import {useTranslation} from "react-i18next";

import {NavigateUrls} from "../../../../utils/constants/navigate-urls";

import {NavigateLink} from "../../styles";
import {Div} from "../../../../styles";

const VisitorRole = ({isMobile}: { isMobile: boolean }) => {
  const {t} = useTranslation();

  return (
    <Div display='flex' alignItems='center' margin='0 0 0 10px'>
      <NavigateLink margin={`0 ${isMobile ? '10px' : '20px'} 0 0`} to={NavigateUrls.auth.login}>
        {t('auth.login')}
      </NavigateLink>
      <NavigateLink to={NavigateUrls.auth.create}>
        {t('auth.create')}
      </NavigateLink>
    </Div>
  );
};

export default VisitorRole;
