import styled from 'styled-components';

type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'link' | 'default';
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ size }) => size === 'small' ? '12px' : size === 'medium' ? '15px' : '16px'};
  color: ${({ variant }) => variant === 'primary' ? 'white' : variant === 'secondary' ? '#2563eb' : variant === 'tertiary' ? '#2563eb' : variant === 'link' ? '#2563eb' : '#374151'};
  height: ${({ size }) => size === 'small' ? '40px' : size === 'medium' ? '48px' : '56px'};
  padding: ${({ size }) => size === 'small' ? '0 8px' : size === 'medium' ? '0 12px' : '0 20px'};
  border-radius: ${({ size }) => size === 'small' ? '4px' : size === 'medium' ? '8px' : '12px'};
  cursor: pointer;
  border: 1px solid transparent;
  border-color: ${({ variant }) => variant === 'tertiary' ? '#2563eb' : variant === 'default' ? '#cbd5e1' : 'transparent'};
  background-color: ${({ variant }) => variant === 'primary' ? '#2563eb' : variant === 'secondary' ? '#eff6ff' : variant === 'tertiary' ? 'white' : variant === 'link' ? 'transparent' : 'white'};
  opacity: ${({ disabled }) => disabled ? '0.5' : '1'};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    text-decoration: ${({ variant }) => variant === 'link' ? 'underline' : 'none'};
    background-color: ${({ variant }) => variant === 'primary' ? '#1d4ed8' : variant === 'secondary' ? '#dbeafe' : variant === 'tertiary' ? '#f3f4f6' : variant === 'link' ? 'transparent' : 'white'};
  }
`;

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};
