//import React from 'react';

const StyledButton = ({ children, onClick }) => {
  return (
    <button
      className=" p-4 rounded-full bg-turquoise hover:bg-turquoise hover:shadow-lg hover:shadow-turquoise transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default StyledButton;


