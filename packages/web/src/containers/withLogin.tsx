import React from 'react';
import { Redirect } from '@reach/router';
import { AppContext } from '../providers/AppProvider';

// TODO: Type check properly.
const withLogin = (WrappedComponent: React.ComponentType<any>) => (
  props: any
) => (
  <AppContext.Consumer>
    {({ authenticated }) => {
      if (!authenticated) {
        return <Redirect from="" to="/login" noThrow />;
      }
      return <WrappedComponent {...props} />;
    }}
  </AppContext.Consumer>
);

export default withLogin;
