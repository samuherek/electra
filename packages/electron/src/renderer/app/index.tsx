import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { ipcRenderer } from 'electron';
import EditorWrap from '../components/EditorWrap';
import GlobalStyles from '../styles/global';

ipcRenderer.setMaxListeners(0);

const WrapStyled = styled.div`
  background: gray;
  position: relative;
  padding-top: 50px;
`;

const DragRegionStyled = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  height: 34px;
  pointer-events: none;
  -webkit-app-region: drag;
`;

const App = () => (
  <WrapStyled>
    <GlobalStyles />
    <DragRegionStyled />
    <h3>It all works!!!!</h3>
    <p>maybe now</p>
    <EditorWrap />
  </WrapStyled>
);

ReactDOM.render(<App />, document.getElementById('app'));
