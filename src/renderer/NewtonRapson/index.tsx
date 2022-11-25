import React, { createContext } from 'react';
import useNewtonRapson from '../useNetwonRapson';

import InputFunction from './InputFunction';
import Resolution from './Resolution';
import css from './styles.module.css';

export const ContextNewtonRapson = createContext({});
const { Provider } = ContextNewtonRapson;

export default function NextownRapson() {
  const hook = useNewtonRapson();

  return (
    <Provider value={hook}>
      <div className={css.newtownRapson}>
        <div className={css.inputFunction}>
          <InputFunction />
        </div>

        <div className={css.resolution}>
          <Resolution />
        </div>
      </div>
    </Provider>
  );
}
