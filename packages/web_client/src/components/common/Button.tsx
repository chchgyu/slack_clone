import { ButtonHTMLAttributes, CSSProperties, forwardRef, ReactNode } from 'react';
import S from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  fullSize?: boolean;
  px?: number;
  py?: number;
  style?: CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <S.ButtonStyled ref={ref} {...rest}>
      {children}
    </S.ButtonStyled>
  );
});

Button.displayName = 'Button';
Button.defaultProps = {
  className: '',
  fullSize: false,
  px: 12,
  py: 8,
};

export default Button;
