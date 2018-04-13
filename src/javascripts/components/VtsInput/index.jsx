import React, { Component } from 'react';

export default class VtsInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({ model: this.props.model });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.props.onChange({ name, value });
    this.setState({ model: value });
  }

  render() {
    const { name, label } = this.props;

    return (
      <div>
        <label htmlFor={name}>
          {label}
          <input name={name} value={this.state.model} onChange={this.handleChange} type="text" />
        </label>
      </div>
    );
  }
}
