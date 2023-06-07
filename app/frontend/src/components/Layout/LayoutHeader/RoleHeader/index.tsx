import React from 'react';

import UserRole from "./UserRole";
import VisitorRole from "./VisitorRole";
import LoadingBlock from "../../../Loadings/Block";
import RippleButton from "../../../Buttons/RippleButton";

import {useStoreDispatch, useStoreSelector} from "../../../../store/hooks";
import {logoutAction} from "../../../../store/saga/actions/auth.actions";

import {Div} from "../../../../styles";
import {useTranslation} from "react-i18next";

const RoleHeader = ({isMobile}: { isMobile: boolean }) => {
  const {t} = useTranslation()
  const dispatch = useStoreDispatch();

  const userData = useStoreSelector(v => v.userData);
  const {loadingUser} = useStoreSelector(v => v.loadingData);

  const handlerClick = () => {
    dispatch(logoutAction());
  }

  return loadingUser ? (
    <LoadingBlock/>
  ) : (
    <Div display='flex'>
      {userData.role.name === 'VISITOR' && (
        <VisitorRole isMobile={isMobile}/>
      )}
      {userData.role.name === 'USER' && (
        <UserRole/>
      )}
      {userData.role.name !== 'VISITOR' && (
        <>
          <RippleButton
            backgroundBtn='transparent'
            backgroundSpn='#cdcdcd'
            onClick={handlerClick}
          >
            {t('user.logout')}
          </RippleButton>
        </>
      )}
    </Div>
  );
};

export default RoleHeader;
