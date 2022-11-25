export interface EquationItem {
  i: number;
  value: number;
  onCalculated?: (value: number) => void;
}
