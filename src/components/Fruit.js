import React, { Component } from 'react';

export default class Fruit extends Component {
  state = {
    color: 'black',
    colors: ['red', 'blue', 'green', 'yellow', ' purple']
  };

  /*
  task: create a button inside of each Fruit, that randomly changes the color 
  to either red, blue, green , or yellow or purple
  */
  constructor(props) {
    super(props);
    console.log('constructed Fruit component with type = ' + props.type);
    let newColor = Math.floor(Math.random() * this.state.colors.length);
    this.state.color = this.state.colors[newColor];
  }

  changeColor = () => {
    this.setState({
      color: (this.state.color = this.state.colors[
        Math.floor(Math.random() * this.state.colors.length)
      ])
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            color: this.state.color
          }}
        >
          {this.props.type}
          ,color = {this.state.color}
          <button onClick={this.changeColor}>change color</button>
          <button
            onClick={this.props.onShowColorHandler.bind(this, this.state.color)}
          >
            show color
          </button>
          <button
            onClick={this.props.deletItemHandler.bind(this, this.props.type)}
          >
            Delete Me
          </button>
        </div>
      </div>
    );
  }
}
