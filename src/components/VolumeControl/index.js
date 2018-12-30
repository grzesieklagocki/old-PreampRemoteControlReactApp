import React, { Component } from "react";

export default class VolumeControl extends Component {
  state = {
    volume: "0.0",
    step: 0
  };

  componentDidMount = () => {
    this.setState({ step: this.props.steps[0] });
  };

  plus = () => {
    this.incrementVolume(this.state.step);
  };

  minus = () => {
    this.incrementVolume(-this.state.step);
  };

  incrementVolume = value => {
    let vol = Number(this.state.volume) + Number(value);

    if (vol < -95.5 || vol > 31.5) return;

    this.setState({
      volume: vol.toFixed(1)
    });
  };

  changeStep = event => {
    this.setState({ step: event.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.changeStep}>
          {this.props.steps.map(step => (
            <option>{step}</option>
          ))}
        </select>
        <h1>
          volume: {this.state.volume > 0 ? "+" : ""}
          {this.state.volume}dB
        </h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
