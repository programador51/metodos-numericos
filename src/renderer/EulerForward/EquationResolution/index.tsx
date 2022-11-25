import React, { useContext, useEffect, useRef } from 'react';
import { Equation, EquationEvaluate } from 'react-equation';
import { EulerContext } from '..';
import { PropsEquationResolution } from './types';
import css from '../styles.module.css';

export default function EquationResolution({
  index,
  isLast = false,
}: PropsEquationResolution) {
  const hook = useContext(EulerContext);

  const result = useRef(null);

  useEffect(() => {
    if (result.current === null) return;

    const y = result.current.result.value;

    hook.setResolution(index, y);
  }, [Object.keys(hook.resolutions).length]);

  if (!hook.resolutions[index - 1]) return <></>;

  return (
    <div>
      <Equation value={`y_${index}`} />
      <span className={css.equality}>=</span>
      <EquationEvaluate
        className={isLast ? css.result : ''}
        ref={result}
        value={`${hook.resolutions[index - 1]} + ${hook.intervalTime} (${
          hook.equation
        })`}
        variables={{
          y: {
            type: 'number',
            value: hook.resolutions[index - 1],
          },
          t: {
            type: 'number',
            value: hook.intervalTime * (index - 1),
          },
        }}
      />
    </div>
  );
}
