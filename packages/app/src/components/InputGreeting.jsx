/* eslint import/no-unresolved: [2, { ignore: ['webassembly-app$'] }] */
import React from 'react';
import {
  input_greeting as inputGreeting,
  Foo,
} from 'webassembly-app';

class InputGreeting extends React.Component {
  constructor(props) {
    super(props);

    const value = new Foo();

    this.state = {
      greeting: '',
      value,
    };

    this.setGreeting = this.setGreeting.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setGreeting(event) {
    this.setState({
      greeting: event.target.value,
    });
  }

  getValue() {
    const { value } = this.state;
    value.alert_current_internal_value();
  }

  setValue(event) {
    const { value } = this.state;
    const num = parseInt(event.target.value, 10);

    this.forceUpdate(() => value.set(num));
  }

  render() {
    const { greeting, value } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            name="inputGreeting"
            placeholder="Enter your greeting here."
            onChange={event => this.setGreeting(event)}
          />
          <button
            type="button"
            onClick={() => inputGreeting(greeting)}
          >
            Greet
          </button>
        </div>
        <div>
          <input
            type="text"
            defaultValue={value.get()}
            onChange={event => this.setValue(event)}
          />
          <button type="button" onClick={() => this.getValue()}>
            Get current value
          </button>
        </div>
      </div>
    );
  }
}

export default InputGreeting;
