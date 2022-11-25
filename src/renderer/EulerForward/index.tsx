import React, { createContext } from 'react';
import useEulerForward from 'renderer/useEulerForward';
import FirstResolution from './FirstResolution';
import InputEquation from './InputEquation';
import InputInitial from './InputInitial';
import InputIntervalTime from './InputIntervalTime';
import InputIteration from './InputIteration';
import Resolution from './Resolution';
import css from './styles.module.css';

export const EulerContext = createContext({});
const { Provider } = EulerContext;

export default function EulerForward() {
  const hook = useEulerForward();

  return (
    <Provider value={hook}>
      <div className={css.ui}>
        <form className={css.inputForm}>
          <InputEquation />
          <InputInitial />
          <InputIntervalTime />
          <InputIteration />
          <button disabled={!hook.isValidForm}>Calcular</button>
        </form>

        <div className={css.resolution}>
          <Resolution />
        </div>
      </div>
    </Provider>
  );
}
