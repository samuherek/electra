import React from 'react';
import { styled } from '@boxlife/ui';
import { RouteComponentProps } from '@reach/router';
import Sidebar from '../Sidebar';

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}

const WrapStyled = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
`;

const PageDashboard = ({ children }: IProps) => (
  <WrapStyled>
    <Sidebar />
    {children}
  </WrapStyled>
);

export default PageDashboard;
