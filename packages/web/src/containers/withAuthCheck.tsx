import React from 'react';
import { Redirect } from '@reach/router';
import { AppContext } from '../providers/AppProvider';

// TODO: Type check properly.
const withAuthCheck = (WrappedComponent: React.ComponentType<any>) => (
  props: any
) => (
  <AppContext.Consumer>
    {({ authenticated }) => {
      if (authenticated) {
        return <Redirect from="/auth" to="/" noThrow />;
      }
      return <WrappedComponent {...props} />;
    }}
  </AppContext.Consumer>
);

export default withAuthCheck;
