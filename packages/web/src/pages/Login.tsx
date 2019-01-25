import * as React from 'react';

import PageDefault from '../components/PageDefault';
import withAuthCheck from '../containers/withAuthCheck';

const Login = ({  }: any) => (
  <PageDefault>
    <div>Login</div>
  </PageDefault>
);

export default withAuthCheck(Login);
