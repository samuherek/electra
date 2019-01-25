import React from 'react';
import { styled } from '@boxlife/ui';

const WrapStyled = styled.main``;

const Content = ({ children }: any) => <WrapStyled>{children}</WrapStyled>;

export default Content;
