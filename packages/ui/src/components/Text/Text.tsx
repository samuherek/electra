import * as React from 'react';
import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

interface IWrapProps {
  display?: string;
  iconSize?: string;
  iconVariant?: 'caption';
  iconBefore: any;
  iconAfter: any;
}

interface ITextProps {
  withEllipsis?: boolean;
  variant?: string;
  display?: string;
  capitalize?: boolean;
}

const TextWrapStyled = styled.div<IWrapProps>`
  display: ${({ display }) => display || 'inline-block'};
  align-items: center;

  svg {
    font-size: ${({ iconSize }) => {
      if (iconSize === 'small') return '12px';
      if (iconSize === 'normal') return '20px';
      return '20px';
    }};
    opacity: ${({ iconVariant }) => {
      if (iconVariant === 'caption') return 0.75;
      return 1;
    }}
    margin-left: ${({ iconAfter }) => (iconAfter ? '7px' : 0)};
    margin-right: ${({ iconBefore }) => (iconBefore ? '7px' : 0)};
  }
`;

const TextStyled = styled.span<ITextProps>`
  ${({ withEllipsis }) =>
    withEllipsis &&
    css`
      ${ellipsis()};
    `};
  opacity: ${({ variant }) => {
    if (variant === 'caption') return 0.5;
    return 1;
  }};
  /* Important display is after withElippsi. It puts inline block on it */
  display: ${({ display }) => display || 'inline-block'};

  ${({ capitalize }) =>
    capitalize &&
    css`
      &:first-letter {
        text-transform: uppercase;
      }
    `};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p {
    padding: 0 3px;
  }
`;

type HTMLTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface IProps {
  children?: any;
  component?: HTMLTypes;
  variant?: 'title' | 'subtitle' | 'caption';
  iconBefore?: React.ComponentType<any> | null;
  iconAfter?: React.ComponentType<any> | null;
  iconVariant?: 'caption';
  iconSize?: 'small' | 'normal';
  withEllipsis?: boolean;
  className?: string;
  capitalize?: boolean; // TODO: I don't think we should have this option in the component. We will use &:first-letter instead
  title?: string;
  display?: 'flex' | 'inline-flex' | 'block' | 'inline-block';
  id?: string; // Comment: this is for accessibility reasosn
  style?: object;
}

// COMMENT: This is an experimental component to see how it holds up for the purpose of generalizing simple typography withs tyled components. This might need to be completely ditched or rework to work with best practicies.
export const Text: React.FC<IProps> = ({
  capitalize = false,
  children,
  className,
  component,
  iconAfter,
  iconBefore,
  iconSize,
  iconVariant,
  id,
  title,
  variant = 'title',
  withEllipsis = true,
  display,
  ...rest
}) => {
  const wrapProps = {
    className,
    iconAfter: !!iconAfter,
    iconBefore: !!iconBefore,
    iconSize: iconSize || 'normal',
    iconVariant,
  };

  const textProps = {
    as: component,
    capitalize,
    children,
    className,
    iconAfter: !!iconAfter,
    iconBefore: !!iconBefore,
    iconVariant,
    id,
    title,
    variant,
    withEllipsis,
  };

  // COMMENT: In case we want to show iicons as well.
  if (iconBefore || iconAfter) {
    return (
      <TextWrapStyled {...wrapProps} display={display} {...rest}>
        {iconBefore ? React.createElement(iconBefore) : null}
        <TextStyled {...textProps} />
        {iconAfter ? React.createElement(iconAfter) : null}
      </TextWrapStyled>
    );
  }

  // COMMENT: Show only the text without any icons.
  return <TextStyled {...textProps} display={display} {...rest} />;
};

export default Text;
