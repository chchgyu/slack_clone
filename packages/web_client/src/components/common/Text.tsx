import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react';
import { TColorTypes, TFontWeight, TSizeTypes } from '../../types';
import S from './Text.styled';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  className?: string;
  color?: TColorTypes | string;
  size?: TSizeTypes;
  style?: CSSProperties;
  weight?: TFontWeight;
}

const Text: FC<TextProps> = ({ children, ...props }) => (
  <S.TextStyled {...props}>{children}</S.TextStyled>
);

Text.defaultProps = {
  className: '',
  color: '#333',
  size: 'md',
  weight: 'normal',
};

export default Text;
