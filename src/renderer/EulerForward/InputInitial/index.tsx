import React, { useContext } from 'react';
import { Equation } from 'react-equation';
import { EulerContext } from '..';
import css from '../styles.module.css';

export default function InputInitial() {
  const hook = useContext(EulerContext);
  return (
    <div className={css.input}>
      <label htmlFor="">
        Valor inicial de <Equation value="y_0" />
      </label>
      <input
        onChange={(e) => hook.setInitialValue(+e.target.value)}
        type="number"
        placeholder="Por ejemplo: 1.74"
      />
    </div>
  );
}
