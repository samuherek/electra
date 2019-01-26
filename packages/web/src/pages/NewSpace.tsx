import React from 'react';
import { styled, Fieldset, TextField, Button, Text } from '@boxlife/ui';
import { Link, RouteComponentProps } from '@reach/router';
import { Formik } from 'formik';
import CreateSpaceMutationContainer from '../graphql/CreateSpaceMutation';

interface IValues {
  name: string;
}

const WrapStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fffefb;
`;

const CloseBtnStyled = styled(Link)`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 10px;
  height: 18px;
  color: rgba(55, 53, 47, 0.3);
  text-decoration: none;
`;

const FormStyled = styled.form`
  margin: 0 auto;
  max-width: 340px;
  width: 100%;
`;

export default class NewSpace extends React.PureComponent<RouteComponentProps> {
  render() {
    const { navigate } = this.props;

    return (
      <WrapStyled>
        <CloseBtnStyled to="/">Close</CloseBtnStyled>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '50px 0',
            textAlign: 'center',
          }}
        >
          <Text component="h2" style={{ marginBottom: 5, fontSize: 28 }}>
            Let's start your next interest.
          </Text>
          <Text component="p" style={{ opacity: 0.5, fontSize: 18 }}>
            You can always changed things up later.
          </Text>
        </div>
        <CreateSpaceMutationContainer>
          {({ createSpaceMutation }) => (
            <Formik<IValues>
              initialValues={{ name: '' }}
              onSubmit={async ({ name }) => {
                const res = await createSpaceMutation({ variables: { name } });
                if (res && res.data) {
                  const { createSpace } = res.data;
                  navigate!(`/${createSpace.id}`);
                }
              }}
            >
              {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <FormStyled onSubmit={handleSubmit}>
                  <Fieldset disabled={isSubmitting}>
                    <TextField
                      label="Name"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <Text component="p" style={{ fontSize: 12, opacity: 0.5 }}>
                      The name of your space/interest. Keep it simple.
                    </Text>
                  </Fieldset>
                  <Button type="submit">Create Space</Button>
                </FormStyled>
              )}
            </Formik>
          )}
        </CreateSpaceMutationContainer>
      </WrapStyled>
    );
  }
}
