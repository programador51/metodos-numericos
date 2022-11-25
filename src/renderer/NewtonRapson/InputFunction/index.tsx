import React, { useContext } from 'react';
import { Equation } from 'react-equation';
import { derivative } from 'mathjs';
import css from '../styles.module.css';
import { ContextNewtonRapson } from '..';

export default function InputFunction() {
  const hook = useContext(ContextNewtonRapson);

  const performDerivation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const derivated = derivative(hook.equation, 'x').toString();
    hook.setDerivate(derivated);
  };

  return (
    <div>
      <form onSubmit={(e) => performDerivation(e)} className={css.input}>
        <label htmlFor="input">f(x)</label>
        <input
          type="text"
          id="input"
          placeholder="Por ejemplo: x^3-x-1"
          value={hook.equation}
          onChange={(e) => hook.setEquation(e.target.value)}
        />

        <label htmlFor="">
          <Equation value={`x_0`} /> (Valor inicial)
        </label>
        <input
          onChange={(e) => hook.setInitialGuess(+e.target.value)}
          value={hook.initialGuess}
          type="number"
          placeholder="Por ejemplo: 1"
        />

        <label htmlFor="">Margen de error</label>
        <input
          value={hook.error}
          onChange={(e) => hook.setError(+e.target.value)}
          type="number"
          placeholder="Por ejemplo: 0.001"
        />

        <label htmlFor="">Iteraciones máximas</label>
        <input
          type="number"
          placeholder="Por ejemplo: 10"
          value={hook.maxIterations}
          onChange={(e) => hook.setMaxIterations(+e.target.value)}
        />

        <button disabled={!hook.canCalculateFunction} type="submit">
          Resolver
        </button>
      </form>

      {hook.equation === '' ? null : (
        <>
          <hr />
          <Equation value={`f(x) = ${hook.equation}`} />
        </>
      )}

      {hook.derivate === '' ? (
        <div className={css.noDerivate}>
          <p>f'(x) = ?</p>
          <p>Confirma la ecuacion f(x) para derivar</p>
        </div>
      ) : (
        <>
          <hr />
          <Equation value={`f'(x) = ${hook.derivate}`} />
        </>
      )}
    </div>
  );
}
