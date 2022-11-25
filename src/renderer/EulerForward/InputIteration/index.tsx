import React, { useContext, useState } from 'react';
import { EulerContext } from '..';
import css from '../styles.module.css';

export default function InputIteration() {
  const hook = useContext(EulerContext);
  return (
    <div className={css.input}>
      <label htmlFor="">Calcular hasta el intervalo y</label>
      <input
        type="number"
        placeholder="Por ejemplo: 3"
        min={1}
        onChange={(e) => hook.setIterations(+e.target.value)}
      />
    </div>
  );
}
