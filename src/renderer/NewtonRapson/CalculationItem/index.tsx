import React, { useContext, useEffect, useRef } from 'react';
import { EquationEvaluate, Equation } from 'react-equation';
import { ContextNewtonRapson } from '..';
import css from '../styles.module.css';
import { PropsCalculationItem } from './types';

export default function CalculationItem({ iteration }: PropsCalculationItem) {
  const hook = useContext(ContextNewtonRapson);

  const fx = useRef(null);
  const xi = useRef(null);

  useEffect(() => {
    console.log('me renderize!!');
    if (fx.current === null || xi.current === null) return;

    hook.setIterationResult(iteration, {
      equation: fx.current.result.value,
      nextIteration: xi.current.result.value,
    });

    if (!hook.resolutions[iteration + 1]) return;

    if (
      hook.resolutions[iteration + 1].equation < hook.error &&
      hook.resultPosition === undefined
    ) {
      hook.setResultPosition(iteration);
    }
  }, [fx, xi, Object.keys(hook.resolutions).length]);

  if (!hook.resolutions[iteration - 1]) return <></>;

  return (
    <div className={css.row}>
      <span>{iteration + 1}</span>
      <span>{hook.resolutions[iteration - 1].nextIteration}</span>
      <span>
        <EquationEvaluate
          value={hook.equation}
          variables={{
            x: {
              type: 'number',
              value: hook.resolutions[iteration - 1].nextIteration,
            },
          }}
          ref={fx}
        />
      </span>
      <span>
        <EquationEvaluate
          className={hook.resultPosition === iteration ? css.result : ''}
          value={`${hook.resolutions[iteration - 1].nextIteration} - ((${
            hook.equation
          })/(${hook.derivate}))`}
          variables={{
            x: {
              type: 'number',
              value: hook.resolutions[iteration - 1].nextIteration,
            },
          }}
          ref={xi}
        />
      </span>
    </div>
  );
}
