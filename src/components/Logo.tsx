import React from 'react';

interface LogoProps {
  size?: number;
  alt?: string;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, alt = 'Logo', src = '/logo.png' }) => {
  const logoStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover', // Ensures the image covers the div completely
    backgroundPosition: 'center', // Centers the background image within the div
    overflow: 'hidden'
  };

  return <div className='overflow-hidden' style={logoStyle} aria-label={alt} />;
};

export default Logo;
