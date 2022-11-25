import { useState } from 'react';
import { ResolutionI, StateNewtonRapson } from './types';

export default function useNewtonRapson() {
  const [state, setState] = useState<StateNewtonRapson>({
    derivate: '',
    equation: '',
    error: 0.01,
    initialGuess: undefined,
    maxIterations: 10,
    resolutions: {},
    resultPosition: undefined,
  });

  const canCalculateFunction =
    state.equation.length > 0 &&
    state.initialGuess !== undefined &&
    state.maxIterations > 0;

  const setEquation = (equation: string) =>
    setState((current) => ({
      ...current,
      equation,
    }));

  const setDerivate = (derivate: string) =>
    setState((current) => ({
      ...current,
      derivate,
    }));

  const setInitialGuess = (initialGuess: number) =>
    setState((current) => ({
      ...current,
      initialGuess,
    }));

  const setMaxIterations = (maxIterations: number) =>
    setState((current) => ({
      ...current,
      maxIterations,
    }));

  const setError = (error: number) =>
    setState((current) => ({
      ...current,
      error,
    }));

  const setIterationResult = (iteration: string, result: ResolutionI) =>
    setState((current) => ({
      ...current,
      resolutions: {
        ...current.resolutions,
        [iteration]: result,
      },
    }));

  const setResultPosition = (resultPosition: number) =>
    setState((current) => ({
      ...current,
      resultPosition,
    }));

  return {
    ...state,
    canCalculateFunction,
    setEquation,
    setDerivate,
    setInitialGuess,
    setMaxIterations,
    setError,
    setIterationResult,
    setResultPosition,
  };
}
