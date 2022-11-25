/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import useLagrange from 'renderer/useLagrange/index';
import css from './styles.module.css';

const Lagrange = () => {
  const formGrid =
    useRef<
      React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >
    >(null);

  const { fillInformation, data, updateData, updateGrid, calculateGrid } =
    useLagrange();

  const calculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fillInformation(data.points);
    // formGrid.current.clear();
  };

  return (
    <div className={css.ui}>
      <form className={css.step1} onSubmit={calculate}>
        <div className={css.input}>
          <label htmlFor="points">Número de puntos</label>
          <input
            min={1}
            onChange={(e) => updateData('points', +e.target.value)}
            name="points"
            id="points"
            type="number"
          />
        </div>

        <div className={css.input}>
          <label htmlFor="x">Valor de "x"</label>
          <input
            min={0}
            onChange={(e) => updateData('x', +e.target.value)}
            name="x"
            id="x"
            type="number"
          />
        </div>

        <button disabled={data.points < 1 || data.x <= 0}>Siguiente</button>
      </form>

      <form
        noValidate
        onSubmit={(e) => {
          calculateGrid();
          e.preventDefault();
        }}
      >
        <div className={css.listGrid}>
          {data.grid.map((item) => (
            <>
              <div className={css.input}>
                <label htmlFor="">Valor de x en i = {item.i}</label>
                <input
                  onChange={(e) => updateGrid(item.i, 'x', +e.target.value)}
                  type="number"
                />
              </div>
              <div className={css.input}>
                <label htmlFor="">Valor de f(x) en i = {item.i}</label>
                <input
                  onChange={(e) => updateGrid(item.i, 'fx', +e.target.value)}
                  type="number"
                />
              </div>

              <hr />
            </>
          ))}
        </div>
        <div className={css.containerButton}>
          {data.grid.length > 0 ? <button>Calcular f(x)</button> : null}
        </div>
      </form>

      <h1 className={css.result}>
        {data.fx === undefined
          ? 'Ingresa los datos para hacer el cálculo'
          : `f(x) = ${data.fx}`}
      </h1>
    </div>
  );
};

export default Lagrange;
