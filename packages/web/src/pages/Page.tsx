import React from 'react';
import withLogin from '../containers/withLogin';

const Page = ({  }: any) => (
  <div>
    <div>Page</div>
  </div>
);

export default withLogin(Page);
