import styled from '@emotion/styled';
import { TextProps } from './Text';

type StyledProps = Pick<TextProps, 'color' | 'size' | 'weight'>;

const TextStyled = styled.span<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.fontSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
  line-height: 1.4;
`;

export default { TextStyled };
