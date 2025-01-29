// src/components/AdviceCard.tsx
import { useState } from 'react';
import { adviceService } from '../services/adviceService';
import { AdviceSlip } from '../types/AdviceTypes';

const AdviceCard = () => {
  const [advice, setAdvice] = useState<AdviceSlip | null>(null);
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
        
        {/* Dice button container */}
        <div className="mt-auto relative flex justify-center">
          <button 
            onClick={getAdvice}
            className="p-4 rounded-full bg-neon_green hover:bg-green-300 transition-colors"
          >
            {/* Dice icon would go here */}
          </button>
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