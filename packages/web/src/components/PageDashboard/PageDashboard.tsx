import React from 'react';
import { styled, css } from '@boxlife/ui';
import { RouteComponentProps } from '@reach/router';
import Sidebar from '../Sidebar';

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
}

interface IWrapProps {
  isRoot: boolean;
}

const WrapStyled = styled.div<IWrapProps>`
  ${({ isRoot }) => {
    if (!isRoot) {
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
  const isRoot = !!location && location.pathname === '/';

  return (
    <WrapStyled isRoot={isRoot}>
      {!isRoot ? <Sidebar /> : null}
      {children}
    </WrapStyled>
  );
};
export default PageDashboard;
