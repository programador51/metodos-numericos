import React, { useContext, useEffect, useRef } from 'react';
import { Equation, EquationEvaluate } from 'react-equation';
import { EulerContext } from '..';
import css from '../styles.module.css';

export default function FirstResolution() {
  const hook = useContext(EulerContext);

  const result = useRef(null);

  useEffect(() => {
    if (result.current === null) return;

    const y = result.current.result.value;

    hook.setResolution(1, y);
  }, [result]);

  return (
    <div>
      <Equation value="y_1" />
      <span className={css.equality}>=</span>
      <EquationEvaluate
        ref={result}
        value={`${hook.initialValue} + ${hook.intervalTime} (${hook.equation})`}
        variables={{
          y: {
            type: 'number',
            value: hook.initialValue,
          },
          t: {
            type: 'number',
            value: 0,
          },
        }}
      />
    </div>
  );
}
