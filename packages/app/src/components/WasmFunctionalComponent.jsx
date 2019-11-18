/* eslint import/no-unresolved: [2, { ignore: ['webassembly-app$'] }] */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const parse = event => parseInt(event.target.value, 10) || 0;

const WasmFunctionalComponent = ({ wasmClass, ...rest }) => {
  const [perfTime, updatePerfTime] = useState(performance.now());

  const renderChange = event => {
    wasmClass.set(parse(event));

    // Because React doesn't know that it needs to re-render this component,
    // we update it using the performance time to get it to re-render.
    updatePerfTime(performance.now());
  };

  console.log(wasmClass);

  return (
    <div cache={perfTime} {...rest}>
      <h3>
        Providing state from Webassembly to a functional component:
      </h3>
      <p>
        We use React Hooks here to get&nbsp;
        <code>performance.now()</code>
        &nbsp;to force an update as the values in the Webassembly
        state changes.
      </p>
      <input
        type="text"
        defaultValue={wasmClass.get()}
        onChange={event => renderChange(event)}
      />
      <button
        type="button"
        onClick={() => wasmClass.alert_current_internal_value()}
      >
        Get current value
      </button>
      <p>
        The current internal value is&nbsp;
        {wasmClass.get()}
        {'.'}
      </p>
    </div>
  );
};

WasmFunctionalComponent.propTypes = {
  wasmClass: PropTypes.shape({
    get: PropTypes.func,
    set: PropTypes.func,
    alert_current_internal_value: PropTypes.func,
  }),
};

WasmFunctionalComponent.defaultProps = {
  wasmClass: {
    get: () => false,
    set: () => false,
    alert_current_internal_value: () => false,
  },
};

export default WasmFunctionalComponent;
