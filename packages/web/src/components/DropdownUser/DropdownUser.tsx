import React from 'react';
import MeQueryContainer from '../../graphql/MeQuery';

import { styled } from '@boxlife/ui';

interface IState {
  opened: boolean;
}

const MainWrapStyled = styled.div`
  position: relative;
  height: 45px;
`;

const AvatarStyled = styled.span`
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 3px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  font-size: 12px;
  background: rgba(55, 53, 47, 0.4);
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 8px;
`;

const TriggerStyled = styled.div`
  display: flex;
  align-items: center;
  min-width: 0px;
  height: 45px;
  outline: none;
  cursor: pointer;
  padding: 0 15px;

  &:hover {
    background: rgba(55, 52, 47, 0.08);
  }
`;

const DropStyled = styled.div`
  position: absolute;
  top: 100%;
  left: 14px;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  display: flex;
  flex-direction: column;
  min-width: 270px;
  max-width: 360px;
  max-height: 70vh;
`;

const DropButtonStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
  transition-property: background, opacity;
  transition-duration: 100ms;
  transition-timing-function: ease-out;
  line-height: 120%;
  width: 100%;
  user-select: none;
  min-height: 28px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgba(55, 52, 47, 0.08);
  }

  span {
    margin: 0 10px;
  }
`;

class DropdownUser extends React.PureComponent<any, IState> {
  state = {
    opened: false,
  };

  toggleDrop = () => this.setState(state => ({ opened: !state.opened }));
  render() {
    const { opened } = this.state;

    return (
      <MeQueryContainer>
        {({ me }) => (
          <MainWrapStyled>
            <TriggerStyled role="button" tabIndex={0} onClick={this.toggleDrop}>
              <AvatarStyled>
                {me!.fullName ? me!.fullName!.charAt(0) : me!.email!.charAt(0)}
              </AvatarStyled>
              {me!.fullName || me!.email}
            </TriggerStyled>
            {opened ? (
              <DropStyled>
                <div>
                  <DropButtonStyled>
                    <span>User dark mode (soon...)</span>
                  </DropButtonStyled>
                  <DropButtonStyled
                    onClick={() => {
                      console.log('clicked');
                    }}
                  >
                    <span>Log out ({me!.email})</span>
                  </DropButtonStyled>
                </div>
              </DropStyled>
            ) : null}
          </MainWrapStyled>
        )}
      </MeQueryContainer>
    );
  }
}

export default DropdownUser;
