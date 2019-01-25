import React, { Component } from 'react';
import { Router } from '@reach/router';
import { ApolloProvider } from 'react-apollo';
import { GlobalStyles, themeDark, ThemeProvider } from '@boxlife/ui';

import Dashboard from './pages/Dashboard';
import DashLayout from './layout/DashLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AppProvider from './providers/AppProvider';
import client from './apollo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppProvider client={client}>
          <ThemeProvider theme={themeDark}>
            <>
              <GlobalStyles />
              <Router>
                <Login path="/login" />
                <SignUp path="/sign-up" />
                <DashLayout path="/">
                  <Dashboard path="/" />
                </DashLayout>
              </Router>
            </>
          </ThemeProvider>
        </AppProvider>
      </ApolloProvider>
    );
  }
}

export default App;
