import * as React from 'react';

import withLogin from '../containers/withLogin';

const Dashboard = ({  }: any) => (
  <div>
    <div>Dashboard</div>
  </div>
);

export default withLogin(Dashboard);
