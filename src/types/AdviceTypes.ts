// src/types/AdviceTypes.ts

// This matches the API response structure
export interface AdviceSlip {
    id: number;
    advice: string;
  }
  
  export interface AdviceResponse {
    slip: AdviceSlip;
  }
  
  // For managing the application state
  export interface AdviceState {
    advice: AdviceSlip | null;
    isLoading: boolean;
    error: string | null;
  }