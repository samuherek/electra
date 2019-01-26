// @flow
import * as React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Space } from 'src/types';

interface IQueryData {
  mySpaces: Space[];
}

interface IRenderProps {
  mySpaces: Space[];
}

interface IContainerProps {
  children: (renderProps: IRenderProps) => React.ReactNode;
}

export const MY_SPACES_QUERY = gql`
  query me {
    mySpaces {
      id
    }
  }
`;

const MySpacesQueryContainer = ({ children }: IContainerProps) => (
  <Query<IQueryData> query={MY_SPACES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'loading';
      }

      if (error) {
        console.log(error);
      }

      return children({
        mySpaces: data ? data.mySpaces : [],
      });
    }}
  </Query>
);

export default MySpacesQueryContainer;
