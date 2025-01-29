// src/components/AdviceCard.tsx
import { useState } from 'react';
import { adviceService } from '../services/adviceService';
import { AdviceSlip } from '../types/AdviceTypes';
import DiceIcon from "./DiceIcon";
import StyledButton from './StyledButton';

const AdviceCard = () => {
  const [advice, setAdvice] = useState<AdviceSlip>({
    id: 197,
    advice: 'Look people in the eye',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAdvice = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await adviceService.getRandomAdvice();
      setAdvice(response.slip);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch advice');
    } finally {
      setLoading(false);
    }
  };

  
return (
  // New container div
  <div className="flex justify-center items-center h-screen">
    {/* Existing container div */}
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-4" style={{ width: '500px', height: '40%'}}>
      {/* Card content */}
      <div className="p-8 bg-dark_grey h-80  flex flex-col">
        {/* Advice number */}
        <h2 className="text-sm text-center text-neon_green tracking-widest mb-6">
          ADVICE #{advice?.id}
        </h2>
    
        {/* Advice text */}
        <p className="text-center text-2xl font-bold text-light_cyan  mb-6">
          &quot;{advice?.advice}&quot;
        </p>
        
     {/*Pattern divider */}
     <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g>
        </svg>

        {/* Dice button container */}
        <div className="mt-auto relative flex justify-center  ">
          <StyledButton onClick={getAdvice}>
            <DiceIcon />
          </StyledButton>
        </div>

      </div>
    </div>
  </div>
);



};

export default AdviceCard;




/*
 to-do list
 - try to work with this return value, and use the Tailwind class names. Re-intergrate the loadstate.
 - use ailwind to style the rest.
*/