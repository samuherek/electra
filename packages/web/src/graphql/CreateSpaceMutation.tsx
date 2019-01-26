// @flow
import * as React from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import { gql } from 'apollo-boost';
import { CreateSpaceMutationArgs, Space } from 'src/types';
import { MY_SPACES_QUERY } from './MySpacesQuery';

// TODO: This doesn't use the generated types. We need to make sure of that.
interface IMutationData {
  createSpace: Space;
}

interface IRenderProps {
  loading: boolean;
  createSpaceMutation: MutationFn<IMutationData, CreateSpaceMutationArgs>;
}

interface IContainerProps {
  children: (renderProps: IRenderProps) => JSX.Element;
}

export const CREATE_SPACE_MUTATION = gql`
  mutation createSpace($name: String!) {
    createSpace(name: $name) {
      id
    }
  }
`;

const CreateSpaceMutationContainer = ({ children }: IContainerProps) => (
  <Mutation<IMutationData, CreateSpaceMutationArgs>
    mutation={CREATE_SPACE_MUTATION}
    refetchQueries={[{ query: MY_SPACES_QUERY }]}
  >
    {(createSpaceMutation, other) => {
      console.log(other);
      if (other.error) {
        console.log(other.error);
      }

      return children({
        createSpaceMutation,
        loading: other.loading,
      });
    }}
  </Mutation>
);

export default CreateSpaceMutationContainer;
