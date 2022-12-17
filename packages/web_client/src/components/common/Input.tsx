import { CSSProperties, forwardRef, InputHTMLAttributes } from 'react';
import S from './Input.styled';
import Text from './Text';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: CSSProperties;
  px?: number;
  py?: number;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, ...rest } = props;

  return (
    <S.Container>
      {label && <Text weight="bolder">{label}</Text>}
      <S.InputStyled ref={ref} {...rest} />
    </S.Container>
  );
});

Input.displayName = 'Input';
Input.defaultProps = { className: '', px: 12, py: 12 };

export default Input;
