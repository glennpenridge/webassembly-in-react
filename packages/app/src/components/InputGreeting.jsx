/* eslint import/no-unresolved: [2, { ignore: ['webassembly-app$'] }] */
import React from 'react';
import { input_greeting as inputGreeting } from 'webassembly-app';

class InputGreeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: '',
    };

    this.setGreeting = this.setGreeting.bind(this);
  }

  setGreeting(event) {
    this.setState({
      greeting: event.target.value,
    });
  }

  render() {
    const { greeting } = this.state;

    return (
      <div>
        <h3>
          Using traditional React state to send a string to a function
          defined in Webassembly:
        </h3>
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
      </div>
    );
  }
}

export default InputGreeting;
