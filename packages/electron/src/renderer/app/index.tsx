import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { ipcRenderer } from 'electron';
import EditorWrap from '../components/EditorWrap';

ipcRenderer.setMaxListeners(0);

const WrapStyled = styled.div`
  margin-top: 50px;
`;

const App = () => (
  <WrapStyled>
    <h3>It all works!!!!</h3>
    <EditorWrap />
  </WrapStyled>
);

ReactDOM.render(<App />, document.getElementById('app'));
