import React from 'react';

const Card = ({ className, children }) => (
  <div className={`p-12 rounded-lg border shadow-xl border-solid border-gray-200 ${className}`}>
    {children}
  </div>
);

export default Card;
