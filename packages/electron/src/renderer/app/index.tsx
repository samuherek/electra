import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { remote } from 'electron';

import { ipcRenderer } from 'electron';
import GlobalStyles from '../styles/global';

ipcRenderer.setMaxListeners(0);

const WrapStyled = styled.div``;

const DragRegionStyled = styled.div`
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  pointer-events: none;
  -webkit-app-region: drag;
`;

const App = () => (
  <WrapStyled>
    <GlobalStyles />
    <DragRegionStyled />
  </WrapStyled>
);

ReactDOM.render(<App />, document.getElementById('app'));
