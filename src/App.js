import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'Larry';
    const a = 5;
    const b = 7;
    const showHalloworld = true;

    const num1 = 42;
    const num2 = 50;
    let math = (
      <h4>
        {num1} + {num2} = {num1 + num2}
      </h4>
    );

    let greet = 'Hallo World from task';
    let greet2 = <h1>{greet}</h1>;

    return (
      <div className="App">
        {/* comment */}
        <h1>The App Component</h1>
        <h4>Hallo {name}</h4>
        <h4>Hallo {name.toUpperCase()}</h4>
        <h4>1 + 1 = {1 + 1}</h4>
        <h4>a + b = {a + b}</h4>
        <h4>
          Nothing:
          {null}
        </h4>
        {showHalloworld ? <h4>Hallo World</h4> : null}
        {math}
        {/* task: create a variable that contains "hallo world". then display
    the hallo world inside a h1 tag that you save in a variable*/}
        <h1>{greet}</h1>
        {greet2}
      </div>
    );
  }
}

export default App;
