export interface StateEulerForward {
  equation: string;
  initialValue: undefined | number;
  intervalTime: undefined | number;
  iterations: undefined | number;
  data: number[];
  resolutions: {
    [key: string]: number;
  };
}
