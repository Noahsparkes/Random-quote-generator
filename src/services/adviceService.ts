// src/services/adviceService.ts
import { AdviceResponse } from '../types/AdviceTypes';

const BASE_URL = 'https://api.adviceslip.com/advice';

export const adviceService = {
  // Method to get random advice
  getRandomAdvice: async (): Promise<AdviceResponse> => {
    try {
      const response = await fetch(BASE_URL);
      
      if (!response.ok) {
        throw new Error('Failed to fetch advice');
      }

      const data: AdviceResponse = await response.json();
      return data;
    } catch (error) {
      // TypeScript knows error might be any type
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(errorMessage);
    }
  }
};

/*
  Its all within a promise because this (API calling) can take time. Within the promise/getRandomAdvice
  is a try/catch for error handling, these are handy to cathc errors right where they happen to prevent 
  further code from bottlenecking.
*/


