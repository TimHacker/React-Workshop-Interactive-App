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

  render() {
    return (
      <div>
        <button onClick={() => this.decrement()}>-1</button>
        {this.state.count}
        <button onClick={() => this.increment()}>+1</button>
      </div>
    );
  }

}

export default Counter;
