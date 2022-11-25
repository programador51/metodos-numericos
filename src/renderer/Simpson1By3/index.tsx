import React, { createContext, useRef } from 'react';
import {
  Equation,
  EquationEvaluate,
  EquationOptions,
  defaultErrorHandler,
} from 'react-equation';
import { defaultFunctions } from 'equation-resolver';
import css from './styles.module.css';
import integral from '../integral.png';
import useSimpson1By3 from 'renderer/useSimpson1By3';
import Step1 from './Step1';
import Step2 from './Step2';

export const ContextSimpson1By3 = createContext<any>();
const { Provider } = ContextSimpson1By3;

const Simpson1By3 = () => {
  const hook = useSimpson1By3();

  const equationRef = useRef();

  return (
    <Provider value={hook}>
      <div className={css.uiSimpson}>
        <div className={css.containerSimpson1By3}>
          <div>
            <div className={css.input}>
              <label htmlFor="">Ecuacion</label>
              <input
                type="text"
                placeholder="Por ejemplo: 1/(1+x^2)"
                onChange={(e) => hook.setFormula(e.target.value)}
              />
            </div>

            <div className={css.input}>
              <label htmlFor="">Intervalos</label>
              <div>
                <span>n = </span>
                <input
                  placeholder="Tiene que ser número par"
                  value={hook.interval}
                  onChange={(e) => hook.setInterval(+e.target.value)}
                  type="number"
                  min={2}
                />
              </div>
            </div>

            <hr />

            {hook.formula === '' ? null : (
              <div className={css.containerFormula}>
                <div className={css.integralContainer}>
                  <input
                    type="number"
                    value={hook.limit.sup}
                    onChange={(e) =>
                      hook.setLimit((state) => ({
                        ...state,
                        sup: +e.target.value,
                      }))
                    }
                  />
                  <img className={css.integralSymbol} src={integral} alt="" />
                  <input
                    type="number"
                    value={hook.limit.low}
                    onChange={(e) =>
                      hook.setLimit((state) => ({
                        ...state,
                        low: +e.target.value,
                      }))
                    }
                  />
                </div>
                <EquationOptions
                  //   variables={defaultVariables}
                  functions={defaultFunctions}
                  errorHandler={defaultErrorHandler}
                >
                  {/* <Equation value={formula} /> */}
                  <Equation value={hook.formula} ref={equationRef} />
                </EquationOptions>
              </div>
            )}

            <hr />

            <button
              onClick={hook.calculateSimpson}
              disabled={!hook.isValidInput}
            >
              Calcular
            </button>

            <hr />

            {hook.intervalsCalculated.length > 0 ? (
              <div>
                <p>
                  Intervalo de [{hook.limit.low} , {hook.limit.sup}] divido en n
                  = {hook.interval} sub-intervalos con una variacion{' '}
                  <Equation value={`Δx = ${hook.delta}`} /> con los siguientes
                  puntos.
                </p>

                {hook.intervalsCalculated.map((item, i) => (
                  <>
                    <Equation
                      value={`x_${i} = ${hook.limit.low} + ${i} * ${item} = ${item}`}
                    />
                    <br />
                    {/* <p>{new Fraction(item).toFraction(true)}</p> */}
                  </>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className={css.resolution}>
          <h3>Resolucion</h3>
          <Step1 />
          <Step2 />
        </div>
      </div>
    </Provider>
  );
};

export default Simpson1By3;
