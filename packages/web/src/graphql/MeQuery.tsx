// @flow
import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { User } from 'src/types';

interface IQueryData {
  me: User;
}

interface IRenderProps {
  me: User | null;
}

interface IContainerProps {
  children: (renderProps: IRenderProps) => JSX.Element;
}

export const ME_QUERY = gql`
  query me {
    me {
      id
      email
      fullName
    }
  }
`;

// Apollo Flow Types
class MeQuery extends Query<IQueryData> {}

const MeQueryContainer = ({ children }: IContainerProps) => (
  <MeQuery query={ME_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'loading';
      }

      if (error) {
        console.log(error);
      }

      return children({
        me: data ? data.me : null,
      });
    }}
  </MeQuery>
);

export default MeQueryContainer;
