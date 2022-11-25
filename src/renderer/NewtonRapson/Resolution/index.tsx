import React, { useContext, useEffect, useRef, useState } from 'react';
import { ContextNewtonRapson } from '..';
import { Equation, EquationEvaluate } from 'react-equation';
import css from '../styles.module.css';
import CalculationItem from '../CalculationItem';

export default function Resolution() {
  const hook = useContext(ContextNewtonRapson);

  const [calculation, setCalculations] = useState<number[]>([]);

  const fx = useRef(null);
  const xi = useRef(null);

  useEffect(() => {
    if (hook.derivate === '') return;

    let elements = [];

    for (let i = 1; i < hook.maxIterations; i++) {
      elements.push(i);
    }

    setCalculations(elements);
  }, [hook.derivate]);

  useEffect(() => {
    if (fx.current === null || xi.current === null) return;

    hook.setIterationResult(0, {
      equation: fx.current.result.value,
      nextIteration: xi.current.result.value,
    });
  }, [fx, xi, hook.derivate]);

  return (
    <div>
      <h2>Resolucion</h2>

      {hook.derivate.length > 0 ? (
        <>
          <div className={css.header}>
            <span>Iteracion</span>
            <span>
              <Equation value="x_i" />
            </span>
            <span>
              <Equation value="f(x_i)" />
            </span>
            <span>
              <Equation value="x_(i+1)" />
            </span>
          </div>
          <div className={css.row}>
            <span>1</span>
            <span>{hook.initialGuess}</span>
            <span>
              <EquationEvaluate
                value={hook.equation}
                variables={{
                  x: {
                    type: 'number',
                    value: hook.initialGuess,
                  },
                }}
                ref={fx}
              />
            </span>
            <span>
              <EquationEvaluate
                value={`${hook.initialGuess} - ((${hook.equation})/(${hook.derivate}))`}
                variables={{
                  x: {
                    type: 'number',
                    value: hook.initialGuess,
                  },
                }}
                ref={xi}
              />
            </span>
            <span></span>
          </div>
          {calculation.map((i) => (
            <CalculationItem iteration={i - 1} key={`calculation-item-${i}`} />
          ))}
        </>
      ) : (
        <p>Primero llena los datos del formulario 👈🏼</p>
      )}
    </div>
  );
}
