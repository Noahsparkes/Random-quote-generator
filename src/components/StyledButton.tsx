import { ReactNode } from 'react';
type StyledButtonProps = {
  children: ReactNode;
  onClick: () => void;
};
const StyledButton = ({ children, onClick }: StyledButtonProps) => {
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


