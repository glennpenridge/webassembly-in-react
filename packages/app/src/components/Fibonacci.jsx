/* eslint import/no-unresolved: [2, { ignore: ['webassembly-app$'] }] */
import React, { useState } from 'react';
import * as wasm from 'webassembly-app';

const parse = event => parseInt(event.target.value, 10) || 0;

const Fibonacci = () => {
  const [fib, updateFib] = useState(0);
  const [calcFib, updateCalcFib] = useState(0);

  const calculateFib = () => {
    updateCalcFib(wasm.fibonacci(fib));
  };

  return (
    <div>
      <h3>
        Calculating Fibonacci and returning the result in a functional
        component:
      </h3>
      <input
        type="number"
        defaultValue={fib}
        min={0}
        max={50}
        onChange={event => {
          updateFib(parse(event));
          calculateFib();
        }}
      />
      <p>
        The calculated fibonnaci value is&nbsp;
        {calcFib}
        {'.'}
      </p>
    </div>
  );
};

export default Fibonacci;
