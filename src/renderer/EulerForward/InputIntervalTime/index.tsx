import React, { useContext } from 'react';
import { Equation } from 'react-equation';
import { EulerContext } from '..';

import css from '../styles.module.css';

export default function InputIntervalTime() {
  const hook = useContext(EulerContext);
  return (
    <div className={css.input}>
      <label htmlFor="">
        Intervalo de tiempo <Equation value="h" />
      </label>
      <input
        type="number"
        placeholder="Por ejemplo: 0.2"
        step={1}
        min={0}
        onChange={(e) => hook.setIntervalTime(+e.target.value)}
      />
    </div>
  );
}
