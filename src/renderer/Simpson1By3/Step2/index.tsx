import React, { useContext, useEffect, useState } from 'react';
import { EquationEvaluate } from 'react-equation';
import { ContextSimpson1By3 } from '..';
import css from './style.module.css';

const Step2 = () => {
  const hook = useContext(ContextSimpson1By3);

  const [equation, setEquation] = useState('');

  useEffect(() => {
    if (Object.keys(hook.calculations).length <= 0) return;

    let currentEquation = '';

    Object.entries(hook.calculations).forEach(([key, result], i) => {
      currentEquation += `${result} ${
        i < Object.keys(hook.calculations).length - 1 ? '+' : ''
      }`;
    });

    currentEquation = `(${hook.delta}/3) * (${currentEquation})`;

    setEquation(currentEquation);
  }, [hook.calculations]);

  if (Object.keys(hook.calculations).length <= 0) return;

  return (
    <div>
      <EquationEvaluate className={css.result} value={equation} />
    </div>
  );
};

export default Step2;
