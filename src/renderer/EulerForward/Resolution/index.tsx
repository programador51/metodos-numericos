import React, { useContext } from 'react';
import { EulerContext } from '..';
import EquationResolution from '../EquationResolution';
import FirstResolution from '../FirstResolution';
import css from '../styles.module.css';

export default function Resolution() {
  const hook = useContext(EulerContext);

  if (!hook.isValidForm)
    return (
      <div>
        <h2>Resolucion</h2>
        <p>Primero llena los datos del formulario 👈🏼</p>
      </div>
    );

  return (
    <div>
      <h2>Resolucion 🧮</h2>

      <div className={css.containerResolution}>
        <FirstResolution />
        {hook.data.map((index) => (
          <EquationResolution
            isLast={index === Object.keys(hook.resolutions).length - 1}
            key={`resolution-${index}`}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
