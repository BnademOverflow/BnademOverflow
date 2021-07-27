import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 20px 15px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>
);

export default Card;
