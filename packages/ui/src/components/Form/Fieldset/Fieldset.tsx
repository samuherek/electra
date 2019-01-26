import styled from '../../../styles/styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
