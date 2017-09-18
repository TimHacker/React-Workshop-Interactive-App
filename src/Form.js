import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref={(c) => { this.textInput = c; }} />
        <button onClick={() => console.log(this.textInput.value)}>Log message</button>
        <button onClick={() => this.textInput.value = ''}>Clear</button>
      </div>
    );
  }

}

export default Form;
