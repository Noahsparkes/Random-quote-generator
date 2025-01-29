//import React from 'react';

const StyledButton = ({ children, onClick }) => {
  return (
    <button
      className="p-4 rounded-full bg-neon_green hover:bg-green-300 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default StyledButton;