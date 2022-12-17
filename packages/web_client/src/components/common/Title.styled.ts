import styled from '@emotion/styled';
import { TitleProps } from './Title';

type StyledProps = Pick<TitleProps, 'color' | 'size' | 'weight'>;

const H1Styled = styled.h1<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.titleSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

const H2Styled = styled.h2<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.titleSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

const H3Styled = styled.h3<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.titleSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

const H4Styled = styled.h4<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.titleSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

const H5Styled = styled.h5<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.titleSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

const H6Styled = styled.h6<StyledProps>`
  ${({ color }) => color && `color: ${color}`};
  ${({ size, theme }) => size && `font-size: ${theme.titleSizes[size]}`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

export default {
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  H6Styled,
};
