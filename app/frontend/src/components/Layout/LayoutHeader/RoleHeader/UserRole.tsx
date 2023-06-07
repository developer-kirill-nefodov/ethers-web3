import React from 'react';
import {useTranslation} from "react-i18next";

import RippleButton from "../../../Buttons/RippleButton";

import {Div} from "../../../../styles";

const UserRole = () => {
  const {t} = useTranslation()

  return (
    <Div display='flex'>
      <RippleButton
        color='#fff'
        backgroundBtn='#4A5EC4'
        backgroundSpn='#cdcdcd'
      >
        {t('user.connect')}
      </RippleButton>
    </Div>
  );
};

export default UserRole;
