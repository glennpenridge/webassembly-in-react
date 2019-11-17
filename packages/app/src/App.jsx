import React from "react";

import * as wasm from "webassembly";

const App = ({ title }) =>
  <div>
    <h1>{title}</h1>
    <button type="button" onClick={() => wasm.greet()}>
      Greet
    </button>
  </div>

export default App;
