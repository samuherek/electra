// @flow
import * as React from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import { gql } from 'apollo-boost';
import { User, LoginMutationArgs } from 'src/types';
import { ME_QUERY } from './MeQuery';

// TODO: This doesn't use the generated types. We need to make sure of that.
interface IMutationData {
  [key: string]: any;
}

interface IRenderProps {
  user?: User;
  loading: boolean;
  loginMutation: MutationFn<IMutationData, LoginMutationArgs>;
}

interface IContainerProps {
  children: (renderProps: IRenderProps) => JSX.Element;
}

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(password: $password, email: $email)
  }
`;

const LoginMutationContainer = ({ children }: IContainerProps) => (
  <Mutation<IMutationData, LoginMutationArgs>
    mutation={LOGIN_MUTATION}
    fetchPolicy="no-cache"
    refetchQueries={[{ query: ME_QUERY }]}
  >
    {(loginMutation, other) => {
      if (other.error) {
        console.log(other.error);
      }

      return children({
        loading: other.loading,
        loginMutation,
      });
    }}
  </Mutation>
);

export default LoginMutationContainer;
