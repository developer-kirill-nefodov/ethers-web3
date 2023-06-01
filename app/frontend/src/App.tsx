import React from 'react';
import {Route, Routes} from "react-router-dom";

import AppPages from "./screens";
import Layout from "./components/Layout";
import {AppGlobalStyles} from "./styles";

function App() {
  return (
    <>
      <AppGlobalStyles/>
      <Layout>
        <Routes>
          <Route
            path={'*'}
            element={<AppPages/>}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
