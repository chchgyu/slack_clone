import styled from '@emotion/styled';
import { ButtonProps } from './Button';

type StyledProps = Pick<ButtonProps, 'fullSize' | 'px' | 'py'>;

const ButtonStyled = styled.button<StyledProps>`
  width: ${({ fullSize }) => (fullSize ? '100%' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 800;
  padding: ${({ px, py }) => `${px}px ${py}px`};
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    filter: brightness(80%);
  }

  &:focus {
    filter: brightness(70%);
  }
`;

export default { ButtonStyled };
