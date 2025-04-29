import React from 'react';
import './Tag.css';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark';
  className?: string;
}

const Tag: React.FC<TagProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  return (
    <span className={`tag tag--${variant} ${className}`}>
      {children}
    </span>
  );
};

export default Tag;