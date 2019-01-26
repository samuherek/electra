import * as React from 'react';
import { Formik } from 'formik';

import PageDefault from '../components/PageDefault';
import withAuthCheck from '../containers/withAuthCheck';
import LoginMutationContainer from '../graphql/LoginMutation';
import { AppContext } from '../providers/AppProvider';
import { styled, TextField, Button, Fieldset, Text } from '@boxlife/ui';

interface ILoginValues {
  email: string;
  password: string;
}

const WrapStyled = styled.main`
  padding-top: 35px;
  margin: 0 auto;
  max-width: 960px;
`;

const FormStyled = styled.form`
  max-width: 300px;
  margin: 0 auto;

  button {
    display: block;
    width: 150px;
    margin: 5px auto;
  }
`;

const Login = ({  }: any) => (
  <AppContext.Consumer>
    {({ ctxLogin }) => (
      <LoginMutationContainer>
        {({ loginMutation }) => (
          <Formik<ILoginValues>
            initialValues={{ email: '', password: '' }}
            onSubmit={async ({ email, password }) => {
              const res = await loginMutation({
                variables: { email, password },
              });
              if (res && res.data && res.data.login) {
                ctxLogin();
              }
            }}
          >
            {({ values, handleChange, isSubmitting, handleSubmit }) => (
              <PageDefault>
                <WrapStyled>
                  <Text
                    component="h2"
                    display="block"
                    style={{
                      fontSize: '48px',
                      marginBottom: '25px',
                      textAlign: 'center',
                    }}
                  >
                    Login
                  </Text>
                  <FormStyled onSubmit={handleSubmit}>
                    <Fieldset disabled={isSubmitting}>
                      <TextField
                        label="Email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <TextField
                        label="Password"
                        name="password"
                        id="password"
                        value={values.password}
                        type="password"
                        onChange={handleChange}
                      />
                      <Button type="submit">Continue</Button>
                    </Fieldset>
                  </FormStyled>
                </WrapStyled>
              </PageDefault>
            )}
          </Formik>
        )}
      </LoginMutationContainer>
    )}
  </AppContext.Consumer>
);

export default withAuthCheck(Login);
