import React from 'react';

import LayoutHeader from "./LayoutHeader";
import {WrapperLayout} from "./styles";
import LayoutFooter from "./LayoutFooter";

interface ILayout {
  children: any
}

const Layout = ({children}: ILayout) => {

  return (
    <WrapperLayout>
      <LayoutHeader/>
        {children}
      <LayoutFooter/>
    </WrapperLayout>
  );
};

export default Layout;
