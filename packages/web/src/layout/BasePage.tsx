import * as React from 'react';
import { styled } from '@boxlife/ui';

interface IProps {
  // TODO: For whatever reason typescript is not behaving
  children: any;
}

const WrapStyled = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 50px auto;
  grid-template-rows: 50px auto;
`;

const BasePage = ({ children }: IProps) => <WrapStyled>{children}</WrapStyled>;

export default BasePage;
