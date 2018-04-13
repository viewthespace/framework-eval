import React, { Component } from 'react';

export default class VtsInput extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('button will mount');
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}
