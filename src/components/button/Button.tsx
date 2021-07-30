import React from 'react';
import styles from './Button.module.css';
import classname from '../classname';
import Pepper from '../Pepper';

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  type?: ButtonType;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick = (e) => {},
  children,
  disabled = false,
  fullWidth = false,
  icon = '',
  type = ButtonType.Button,
}: ButtonProps) => {
  return (
    <button
      className={classname(styles[variant], styles[size])}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={{
        width: fullWidth ? '100%' : 'initial',
      }}
    >
      {icon && <span className="material-icons">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
