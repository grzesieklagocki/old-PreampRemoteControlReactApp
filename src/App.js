import React, { Component } from "react";
import "./App.css";
import VolumeControl from "./components/VolumeControl";

export default class App extends Component {
  render() {
    return <VolumeControl steps={[0.5, 1, 2, 3]} />;
  }
}
