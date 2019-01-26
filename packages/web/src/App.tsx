import React, { Component } from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from 'react-apollo';
import { GlobalStyles, ThemeProvider, themeLight } from '@boxlife/ui';

import Spaces from './pages/Spaces';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppProvider from './providers/AppProvider';
import client from './apollo';
import PageDashboard from './components/PageDashboard';
import Page from './pages/Page';
import NewSpace from './pages/NewSpace';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppProvider client={client}>
          <ThemeProvider theme={themeLight}>
            <>
              <GlobalStyles />
              <Router>
                <Login path="/login" />
                <SignUp path="/sign-up" />
                <PageDashboard path="/">
                  <Spaces path="/" />
                  <NewSpace path="/new-space" />
                  <Page path="/:pageId" />
                </PageDashboard>
              </Router>
            </>
          </ThemeProvider>
        </AppProvider>
      </ApolloProvider>
    );
  }
}

export default App;
