import React from 'react';

import Dropdown from "../../../Dropdown";
import RippleButton from "../../../Buttons/RippleButton";

import {useStoreDispatch} from "../../../../store/hooks";
import {logoutAction} from "../../../../store/saga/actions/auth.actions";

import {Div} from "../../../../styles";

const UserRole = () => {
  const dispatch = useStoreDispatch();

  const handlerClick = () => {
    dispatch(logoutAction());
  }

  return (
    <Div display='flex'>
      <Dropdown title='Title'/>
      <RippleButton onClick={handlerClick}>
        Logout
      </RippleButton>
    </Div>
  );
};

export default UserRole;
