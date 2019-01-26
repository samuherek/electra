import React from 'react';
import { styled } from '@boxlife/ui';

import UserDrop from './sidebar/UserDrop';
import Toolbox from './sidebar/Toolbox';
import Pages from './sidebar/Pages';
import Misc from './sidebar/Misc';
import AddNewPage from './sidebar/AddNewPage';

const WrapStyled = styled.aside`
  background: ${({ theme }) => theme.layout.sidebar};
`;

const Sidebar: React.FC = () => (
  <WrapStyled>
    <UserDrop />
    <Toolbox />
    <Pages />
    <Misc />
    <AddNewPage />
  </WrapStyled>
);

export default Sidebar;
