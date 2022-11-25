import React, { useContext, useEffect, useRef } from 'react';
import { EquationEvaluate } from 'react-equation';
import { ContextSimpson1By3 } from '..';
import { EquationItem } from './types';
import css from './styles.module.css';

const Equation = ({ i, value, onCalculated = () => {} }: EquationItem) => {
  const hook = useContext(ContextSimpson1By3);

  const result = useRef(null);

  useEffect(() => {
    hook.updateCalculation(i, result.current.result.value);
    onCalculated(result.current.result.value);
  }, [result]);

  if (i === 0 || i === hook.intervalsCalculated.length - 1)
    return (
      <>
        <div className={css.calculation}>
          <span>f({value}) = </span>
          <EquationEvaluate
            ref={result}
            value={`${hook.formula}`}
            variables={{
              x: {
                type: 'number',
                value: value,
              },
            }}
          />
        </div>
        <hr />
      </>
    );

  return (
    <>
      <div className={css.calculation}>
        <span>f({value}) = </span>
        <EquationEvaluate
          ref={result}
          value={`${(i + 1) % 2 === 0 ? '4' : '2'} * (${hook.formula})`}
          variables={{
            x: {
              type: 'number',
              value: value,
            },
          }}
        />
      </div>
      <hr />
    </>
  );
};

export default Equation;
