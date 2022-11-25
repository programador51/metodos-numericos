import { useEffect, useState } from 'react';
import { StateEulerForward } from './types';

export default function useEulerForward() {
  const [state, setState] = useState<StateEulerForward>({
    equation: '',
    initialValue: undefined,
    intervalTime: undefined,
    iterations: undefined,
    resolutions: {},
    data: [],
  });

  useEffect(() => {
    if (state.iterations === undefined) return;

    let data = [];

    for (let i = 0; i < state.iterations - 1; i++) {
      data.push(i + 2);
    }

    setState((current) => ({
      ...current,
      data,
    }));
  }, [state.iterations]);

  const isValidForm =
    state.equation !== '' &&
    state.initialValue !== undefined &&
    state.intervalTime !== undefined &&
    state.iterations !== undefined;

  const setEquation = (equation: string) =>
    setState((current) => ({ ...current, equation }));

  const setInitialValue = (initialValue: number) =>
    setState((current) => ({ ...current, initialValue }));

  const setIntervalTime = (intervalTime: number) =>
    setState((current) => ({ ...current, intervalTime }));

  const setIterations = (iterations: number) =>
    setState((current) => ({ ...current, iterations }));

  const setResolution = (index: string, value: number) =>
    setState((current) => ({
      ...current,
      resolutions: {
        ...current.resolutions,
        [index]: value,
      },
    }));

  return {
    ...state,
    setEquation,
    setInitialValue,
    setIntervalTime,
    setIterations,
    setResolution,
    isValidForm,
  };
}
