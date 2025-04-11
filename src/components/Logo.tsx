import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 44, height = 44, alt = 'Logo', src = '/icons/logo-2.png' }) => {
  const logoStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover', // Ensures the image covers the div completely
    backgroundPosition: 'center', // Centers the background image within the div
    overflow: 'hidden'
  };

  return <div className='overflow-hidden' style={logoStyle} aria-label={alt} />;
};

export default Logo;
