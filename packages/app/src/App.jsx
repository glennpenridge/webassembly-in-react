/* eslint import/no-unresolved: [2, { ignore: ['webassembly-app$'] }] */
import React from 'react';
import PropTypes from 'prop-types';
import * as wasm from 'webassembly-app';

import Greet from './components/Greet';
import InputGreeting from './components/InputGreeting';
import WasmFunctionalComponent from './components/WasmFunctionalComponent';
import Fibonacci from './components/Fibonacci';

const foo = new wasm.Foo();

const App = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <hr />
    <Greet />
    <hr />
    <InputGreeting />
    <hr />
    <WasmFunctionalComponent wasmClass={foo} />
    <hr />
    <Fibonacci />
    <hr />
    <h3>
      HTML generated in Webassembly and appended to the document:
    </h3>
  </div>
);

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: 'Hello, ReactBris!',
};

export default App;
