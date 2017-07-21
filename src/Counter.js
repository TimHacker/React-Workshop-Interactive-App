import React from 'react';

class Counter extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  resetCount() {
    this.setState({ count: 0 });
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

export default Counter;
