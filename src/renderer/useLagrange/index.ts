import { useState } from 'react';
import { GridLagrange, StateUseLagrange } from './types';

export default function useLagrange(points: number, xValue: number) {
  const [data, setData] = useState<StateUseLagrange>({
    points: 0,
    x: 0,
    grid: [],
    fx: undefined,
  });

  const updateData = (key: string, value: number) =>
    setData((state) => ({
      ...state,
      [key]: value,
    }));

  /**
   * Handle the information to calculate the lagrange series
   * @param points Number of points that will have the problem
   */
  const fillInformation = (points: number) => {
    let grid: GridLagrange[] = [];
    for (let i = 0; i < points; i++) {
      grid.push({
        fx: 0,
        x: 0,
        i: i + 1,
      });
    }

    setData((state) => ({
      ...state,
      grid,
    }));
  };

  const updateGrid = (i: number, key: string, value: number) => {
    setData((state) => {
      let grid = [...state.grid];
      grid[i - 1][key] = value;
      return {
        ...state,
        grid,
      };
    });
  };

  const calculateGrid = () => {
    let v = 0;

    for (let i = 0; i < data.points; i++) {
      let l = 1.0;
      let b = 1.0;

      for (let j = 0; j < data.points; j++) {
        if (j !== i) {
          l = l * (data.x - data.grid[j].x);
          b = b * (data.grid[i].x - data.grid[j].x);
        }
      }

      v = v + data.grid[i].fx * (l / b);
    }

    setData((state) => ({
      ...state,
      fx: v,
    }));
  };

  return { fillInformation, updateData, data, updateGrid, calculateGrid };
}
