import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue || 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  resetCount() {
    this.setState({ count: this.props.initialValue });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.decrement()}>-1</button>
        {this.state.count}
        <button onClick={() => this.increment()}>+1</button>
        <br />
        <button onClick={() => this.resetCount()}>Reset</button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialValue: PropTypes
    .number
    .isRequired,
};

export default Counter;
