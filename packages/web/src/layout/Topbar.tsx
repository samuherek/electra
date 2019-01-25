import * as React from 'react';
import { styled } from '@boxlife/ui';
import { Link } from '@reach/router';

const WrapStyled = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;
  background: white;
`;

const Topbar = () => (
  <WrapStyled>
    <span>span</span>
    <Link to="/">Home</Link>
    <Link to="/websites">Websites</Link>
  </WrapStyled>
);
export default Topbar;
