import React from 'react';
import { styled, css } from '@boxlife/ui';
import { RouteComponentProps } from '@reach/router';
import Sidebar from '../Sidebar';

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}

interface IWrapProps {
  withGrid: boolean;
}

const WrapStyled = styled.div<IWrapProps>`
  ${({ withGrid }) => {
    if (withGrid) {
      return css`
        display: grid;
        grid-template-columns: 240px 1fr;
      `;
    }
    return '';
  }}
  min-height: 100vh;
`;

const PageDashboard = ({ children, location }: IProps) => {
  const isEmpty = !!location && location.pathname === '/new-space';
  // const isRoot = !!location && location.pathname === '/';

  return (
    <WrapStyled withGrid={!isEmpty}>
      {!isEmpty ? <Sidebar /> : null}
      {children}
    </WrapStyled>
  );
};
export default PageDashboard;
