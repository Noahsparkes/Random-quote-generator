import { useState } from 'react';
import { adviceService } from '../services/adviceService';
import { AdviceSlip } from '../types/AdviceTypes';
import DiceIcon from "./DiceIcon";
import StyledButton from './StyledButton';
import "../App.css";

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
    <div className="flex justify-center items-center h-screen">
      {/* Wrapper div */}
      <div className="relative max-w-md mx-auto m-4" style={{ width: '900px' }}>
        {/* Card container  */}
        <div className="bg-black rounded-2xl shadow-lg overflow-hidden">
          {/* Card content */}
          <div className="p-8 bg-dark_grey h-80 flex flex-col relative rounded-2xl">
            {/* Advice number */}
            <h2 className="text-sm text-center text-neon_green tracking-widest mb-6">
              ADVICE #{advice?.id}
            </h2>

            {/* Advice text */}
              {loading ? (
                <p className="text-center text-xl font-semibold text-light_cyan">Loading...</p>
              ) : error ? (
                <p className="text-center text-xl font-semibold text-red-400">{error}</p>
              ) : (
                <p className="text-center text-2xl font-bold text-light_cyan">
                  &quot;{advice?.advice}&quot;
                </p>
              )}

            {/* Divider */}
            <div className="relative h-16">
              {/* Desktop SVG */}
              <svg
                className="hidden md:flex divider-desktop absolute bottom-0 left-0 right-0 mx-auto w-full justify-center"
                width="444"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h155v1H0zM248 8h155v1H248z " />
                  <g transform="translate(185)" fill="#CEE3E9" >
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>

              {/* Mobile SVG */}
              <svg
                className="flex md:hidden divider-mobile absolute bottom-0 left-0 right-0 mx-auto w-full justify-center"
                width="295"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path fill="#4F5D74" d="M0 8h124v1H0zM173 8h122v1H173z"/>
                  <g transform="translate(140)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3"/>
                    <rect x="14" width="6" height="16" rx="3"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Dice button  */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] flex justify-center z-10">
          <StyledButton onClick={getAdvice}>
            <DiceIcon />
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default AdviceCard;