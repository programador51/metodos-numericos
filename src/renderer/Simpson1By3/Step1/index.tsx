import React, { useContext } from 'react';
import { ContextSimpson1By3 } from '..';
import Equation from '../Equation';
const Step1 = () => {
  const hook = useContext(ContextSimpson1By3);

  if (hook.intervalsCalculated.length > 0)
    return hook.intervalsCalculated.map((item, i) => (
      <Equation i={i} value={item} key={`calculation-13simpson-${i}`} />
    ));

  return <p>Primero llena los datos del problema</p>;
};

export default Step1;
