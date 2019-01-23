import React, { Component } from 'react';
import { Router } from '@reach/router';
import { GlobalStyles, theme, ThemeProvider } from '@electra/ui';

import Dashboard from './pages/Dashboard';
import DashLayout from './layout/DashLayout';
import PageNew from './pages/PageNew';
import Websites from './pages/Websites';
import Website from './pages/Website';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Router>
            <DashLayout path="/">
              <Dashboard path="/" />
              <Websites path="/websites" />
            </DashLayout>
            <PageNew path="/new" />
            <Website path="/websites/:slug" />
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
