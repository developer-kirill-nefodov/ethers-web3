import React from 'react';

import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";

import {WrapperLayout} from "./styles";

interface ILayout {
  children:  React.ReactElement | null
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
