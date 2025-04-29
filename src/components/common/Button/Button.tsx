import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'icon';
  isActive?: boolean;
  title?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  isActive = false,
  title,
  className = '',
}) => {
  return (
    <button
      className={`button button--${variant} ${isActive ? 'active' : ''} ${className}`}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;