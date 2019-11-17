/* eslint import/no-unresolved: [2, { ignore: ['webassembly$'] }] */
import React from 'react';
import PropTypes from 'prop-types';

import * as wasm from 'webassembly';

const App = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <button type="button" onClick={() => wasm.greet()}>
      Greet
    </button>
  </div>
);

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: 'Hello, ReactBris!',
};

export default App;
