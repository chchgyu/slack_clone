import styled from '@emotion/styled';
import { InputProps } from './Input';

type StyledProps = Pick<InputProps, 'px' | 'py'>;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const InputStyled = styled.input<StyledProps>`
  border-radius: 4px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[700]};
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ px, py }) => `${px}px ${py}px`};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.4;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray[500]},
      0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export default { Container, InputStyled };
