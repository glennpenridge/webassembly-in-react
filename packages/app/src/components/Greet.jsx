/* eslint import/no-unresolved: [2, { ignore: ['webassembly-app$'] }] */
import React from 'react';
import * as wasm from 'webassembly-app';

const Greet = () => (
  <div>
    <h3>Webassembly function bound to a button in React:</h3>
    <button type="button" onClick={() => wasm.greet()}>
      Greet
    </button>
  </div>
);

export default Greet;
