import React from 'react';
import { styled } from '@boxlife/ui';
import UserDropSimple from './sidebar/UserDropSimple';
import UserDrop from './sidebar/UserDrop';
import Toolbox from './sidebar/Toolbox';
import Pages from './sidebar/Pages';
import Misc from './sidebar/Misc';
import AddNewPage from './sidebar/AddNewPage';

interface IProps {
  showTree: boolean;
}

const WrapStyled = styled.aside`
  background: ${({ theme }) => theme.layout.sidebar};
`;

const Sidebar: React.FC<IProps> = ({ showTree }) => {
  if (!showTree) {
    return <UserDropSimple />;
  }

  return (
    <WrapStyled>
      <UserDrop />
      <Toolbox />
      <Pages />
      <Misc />
      <AddNewPage />
    </WrapStyled>
  );
};
export default Sidebar;
