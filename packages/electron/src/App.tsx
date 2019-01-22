import React, { Component } from 'react';
import { Router } from '@reach/router';
import { GlobalStyles, theme, ThemeProvider } from '@electra/ui';

import Dashboard from './pages/Dashboard';
import DashLayout from './layout/DashLayout';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Router>
            <DashLayout path="/">
              <Dashboard path="/" />
            </DashLayout>
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
