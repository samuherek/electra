import * as React from 'react';

import BasePage from './BasePage';
import Topbar from './Topbar';
import Content from './Content';
import Sidebar from './Sidebar';

const DashLayout = ({ children }: any) => (
  <BasePage>
    <Topbar />
    <Sidebar />
    <Content>{children}</Content>
  </BasePage>
);

export default DashLayout;
