import React from 'react';

interface LogoProps {
  variant?: 'svg' | 'png' | 'pdf';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'svg', 
  size = 'md', 
  className = '',
  alt = 'Fanoos Logo'
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto'
  };

  const getLogoSrc = () => {
    switch (variant) {
      case 'svg':
        return '/images/logos/fanoos-logo.svg';
      case 'png':
        return '/images/logos/fanoos-logo.png';
      case 'pdf':
        return '/images/logos/fanoos-logo.pdf';
      default:
        return '/images/logos/fanoos-logo.svg';
    }
  };

  return (
    <img
      src={getLogoSrc()}
      alt={alt}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo; 