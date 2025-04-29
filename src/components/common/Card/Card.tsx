// components/common/Card/Card.tsx
import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'light',
  className = '' 
}) => {
  return (
    <div className={`card card--${variant} ${className}`}>
      {children}
    </div>
  );
};

export default Card;