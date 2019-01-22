import * as React from 'react';
import { styled } from '@electra/ui';

const WrapStyled = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;
  background: white;
`;

const Topbar = () => (
  <WrapStyled>
    <span>span</span>
  </WrapStyled>
);
export default Topbar;
