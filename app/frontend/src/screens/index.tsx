import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import AuthElement from "../components/Auth/AuthElement";

import {useStoreDispatch, useStoreSelector} from "../store/hooks";
import {accessRoleAction} from "../store/saga/actions/auth.actions";

import {routers} from "./routers";

const AppPages = () => {
  const dispatch = useStoreDispatch();

  const userData = useStoreSelector(v => v.userData);
  const {loadingUser} = useStoreSelector(v => v.loadingData);

  useEffect(() => {
    dispatch(accessRoleAction());
  }, [dispatch]);

  return (
    <Routes>
      {routers.map((e, i) => (
        <Route
          key={'Route_' + i}
          path={e.path}
          element={
            <AuthElement
              item={e}
              userData={userData}
              loadingUser={loadingUser}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default AppPages;
