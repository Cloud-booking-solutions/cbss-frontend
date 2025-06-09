import React from 'react';

const DialogProvider = ({ children }) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};

export default DialogProvider; 