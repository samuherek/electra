// @flow
import * as React from 'react';
import styled from '../../../styles/styled-components';

interface ILabelStyled {
  shrink?: boolean;
  className?: string;
}

interface IFieldLabelProps extends ILabelStyled {
  error: boolean;
  text: string;
  hasValue: boolean;
  focused: boolean;
}

// TODO: Fix the any type
const LabelStyled = styled.label<ILabelStyled>`
  line-height: 1;
  display: block;
  padding: 0;
  font: inherit;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(55, 53, 47, 0.6);
  font-weight: 500;
`;

const FieldLabel = ({
  error,
  hasValue,
  focused,
  text,
  shrink,
  className,
  ...other
}: IFieldLabelProps) => {
  const shrinkLabel = shrink || hasValue || focused;

  return (
    <LabelStyled shrink={shrinkLabel} className={className} {...other}>
      {text}
    </LabelStyled>
  );
};

export { FieldLabel, IFieldLabelProps };
