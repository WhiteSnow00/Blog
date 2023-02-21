import React from 'react';

interface BadgeProps {
  url: string;
  alt: string;
}

const Badge: React.FC<BadgeProps> = ({ url, alt }) => {
  return (
    <a href={url} target="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" rel="noopener noreferrer">
      <img src={url} alt={alt} />
    </a>
  );
};

export default Badge;