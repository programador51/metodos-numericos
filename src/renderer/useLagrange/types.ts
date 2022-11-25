export interface ParamsUseLagrange {
  points: number;
  xValue: number;
}

export interface GridLagrange {
  x: number;
  fx: number;
  i: number;
}

export interface StateUseLagrange {
  points: number;
  x: number;
  grid: GridLagrange[];
  /**
   * Result of the calculation
   */
  fx: number | undefined;
}
