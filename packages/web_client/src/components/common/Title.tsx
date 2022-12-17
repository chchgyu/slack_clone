import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import type { TColorTypes, TFontWeight, TSizeTypes } from '../../types';
import S from './Title.styled';

type HeadingPropsType = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  className?: string;
  color?: TColorTypes | string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: TSizeTypes;
  style?: CSSProperties;
  weight?: TFontWeight;
}

const Title: FC<TitleProps> = ({ children, level = 2, ...props }) => {
  const headingProps: HeadingPropsType = useMemo(() => ({ ...props }), [props]);

  switch (level) {
    case 1:
      return <S.H1Styled {...headingProps}>{children}</S.H1Styled>;
    case 2:
      return <S.H2Styled {...headingProps}>{children}</S.H2Styled>;
    case 3:
      return <S.H3Styled {...headingProps}>{children}</S.H3Styled>;
    case 4:
      return <S.H4Styled {...headingProps}>{children}</S.H4Styled>;
    case 5:
      return <S.H5Styled {...headingProps}>{children}</S.H5Styled>;
    case 6:
      return <S.H6Styled {...headingProps}>{children}</S.H6Styled>;
  }
};

Title.defaultProps = {
  className: '',
  color: '#333',
  size: 'md',
  weight: 'normal',
};

export default Title;
