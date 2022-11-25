import { useState } from 'react';

export default function useSimpson1By3() {
  const [formula, setFormula] = useState('');

  const [interval, setInterval] = useState(1);

  const [limit, setLimit] = useState({
    sup: 0,
    low: 0,
  });

  const [calculations, setCalculations] = useState<any>({});

  const [delta, setDelta] = useState<number>(0);

  const [intervalsCalculated, setIntervalsCalculated] = useState<number[]>([]);

  const isValidInput =
    formula.length > 0 &&
    interval >= 1 &&
    limit.sup !== undefined &&
    limit.low !== undefined &&
    limit.sup > limit.low;

  const calculateSimpson = () => {
    const deltaCalculated = (limit.sup - limit.low) / interval;

    setDelta(deltaCalculated);

    const array = [limit.low];

    for (let i = 1; i < interval + 1; i++) {
      array.push(limit.low + deltaCalculated * i);
    }

    setIntervalsCalculated(array);
  };

  const updateCalculation = (i, value) =>
    setCalculations((state) => ({
      ...state,
      [i]: value,
    }));

  return {
    formula,
    setFormula,
    interval,
    setInterval,
    limit,
    setLimit,
    isValidInput,
    calculateSimpson,
    intervalsCalculated,
    delta,
    calculations,
    updateCalculation,
  };
}
