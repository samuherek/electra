import React from 'react';
import { styled } from '@boxlife/ui';

const WrapStyled = styled.aside`
  background: ${({ theme }) => theme.layout.sidebar};
`;

const Sidebar = () => (
  <WrapStyled>
    <span>sidebar</span>
  </WrapStyled>
);

export default Sidebar;
