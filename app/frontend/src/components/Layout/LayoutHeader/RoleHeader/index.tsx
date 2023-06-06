import React from 'react';

import UserRole from "./UserRole";
import VisitorRole from "./VisitorRole";
import Languages from "../../Languages";
import LoadingBlock from "../../../Loadings/Block";

import {useStoreSelector} from "../../../../store/hooks";

import {Div} from "../../../../styles";

const RoleHeader = ({isMobile}: { isMobile: boolean }) => {
  const userData = useStoreSelector(v => v.userData);
  const {loadingUser} = useStoreSelector(v => v.loadingData);

  return loadingUser ? (
    <LoadingBlock/>
  ) : (
    <Div display='flex'>
      <Languages isMobile={isMobile}/>
      {userData.role.name === 'VISITOR' && (
        <VisitorRole isMobile={isMobile}/>
      )}
      {userData.role.name === 'USER' && (
        <UserRole/>
      )}
    </Div>
  );
};

export default RoleHeader;
