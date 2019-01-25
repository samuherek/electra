import React from 'react';
import { styled } from '@boxlife/ui';
import { RouteComponentProps } from '@reach/router';
import Sidebar from '../Sidebar';
import { AppContext } from '../../providers/AppProvider';

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}

const WrapStyled = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
`;

const PageDashboard = ({ children, location }: IProps) => {
  const isRoot = location && location.pathname === '/';

  return (
    <AppContext.Consumer>
      {({}) => (
        <WrapStyled>
          <Sidebar showTree={!isRoot} />
          {children}
        </WrapStyled>
      )}
    </AppContext.Consumer>
  );
};
export default PageDashboard;
