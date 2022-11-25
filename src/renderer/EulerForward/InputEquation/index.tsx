import React, { useContext } from 'react';
import { Equation } from 'react-equation';
import { EulerContext } from '..';
import css from '../styles.module.css';

export default function InputEquation() {
  const hook = useContext(EulerContext);

  return (
    <div className={css.input}>
      <label htmlFor="">
        Ecuacion <Equation value="y'" />
      </label>
      <input
        type="text"
        placeholder="Por ejemplo: 0.4y^2t+2"
        onChange={(e) => hook.setEquation(e.target.value)}
      />
    </div>
  );
}
