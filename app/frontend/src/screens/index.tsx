import React from 'react';
import {Routes, Route} from 'react-router-dom';

import AuthElement from "../components/Auth/AuthElement";

import {useStoreSelector} from "../store/hooks";
import {routers} from "./routers";

const AppPages = () => {
  const userData = useStoreSelector(v => v.userData);

  return (
    <Routes>
      {routers.map((e, i) => (
        <Route
          key={'Route_' + i}
          path={e.path}
          element={
            <AuthElement
              userData={userData}
              item={e}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default AppPages;
