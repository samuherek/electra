import React from 'react';

import { styled } from '@boxlife/ui';

interface IState {
  opened: boolean;
}

const MainWrapStyled = styled.div`
  position: relative;
`;

const TriggerStyled = styled.div`
  display: flex;
  align-items: center;
  min-width: 0px;
  height: 24px;
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
  right: 14px;
  border-radius: 3px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  display: flex;
  flex-direction: column;
  min-width: 180px;
  max-width: 240px;
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

class DropdownStyle extends React.PureComponent<any, IState> {
  state = {
    opened: false,
  };

  toggleDrop = () => this.setState(state => ({ opened: !state.opened }));
  render() {
    const { opened } = this.state;

    return (
      <MainWrapStyled>
        <TriggerStyled role="button" tabIndex={0} onClick={this.toggleDrop}>
          ...
        </TriggerStyled>
        {opened ? (
          <DropStyled>
            <div>
              <DropButtonStyled>
                <span>User dark mode (soon...)</span>
              </DropButtonStyled>
            </div>
          </DropStyled>
        ) : null}
      </MainWrapStyled>
    );
  }
}

export default DropdownStyle;
