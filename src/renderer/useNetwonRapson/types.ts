export interface StateNewtonRapson {
  equation: string;
  derivate: string;
  error: number;
  maxIterations: number;
  initialGuess: number | undefined;
  resolutions: {
    [key: string]: ResolutionI;
  };
  /**
   * Index on the property 'resolutions' that contains the correct result for the problem
   */
  resultPosition: undefined | number;
}

export interface ResolutionI {
  equation: number;
  nextIteration: number;
}
