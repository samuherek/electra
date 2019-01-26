import * as React from 'react';
import { Text, styled } from '@boxlife/ui';

import withLogin from '../containers/withLogin';
import DropdownUser from '../components/DropdownUser';
import DropdownStyle from '../components/DropdownStyle/idnex';
import MySpacesQueryContainer from '../graphql/MySpacesQuery';
import { Link } from '@reach/router';

const TopStyed = styled.header`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MidWrapStyled = styled.div`
  padding-left: 96px;
  padding-right: 96px;
`;

const ToolsStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
`;

const AddBtnStyled = styled(Link)`
  position: relative;
  top: 5px;
  margin-left: 15px;
  padding: 5px 10px;
  height: 18px;
  color: rgba(55, 53, 47, 0.3);
  text-decoration: none;
`;

const Spaces = ({  }: any) => (
  <>
    <TopStyed>
      <DropdownUser />
      <ToolsStyled>
        <DropdownStyle />
      </ToolsStyled>
    </TopStyed>
    <MidWrapStyled>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          paddingTop: 50,
        }}
      >
        <Text component="h2" style={{ fontSize: '2.75rem' }}>
          Spaces
        </Text>
        <AddBtnStyled to="/new-space">+ New Space</AddBtnStyled>
      </div>
      <MySpacesQueryContainer>
        {({ mySpaces }) => (
          <>
            {mySpaces.map(s => (
              <div key={s.id}>{s.id}</div>
            ))}
          </>
        )}
      </MySpacesQueryContainer>
    </MidWrapStyled>
  </>
);

export default withLogin(Spaces);
