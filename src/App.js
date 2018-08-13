import React, { Component } from 'react';
import './App.css';
import AddTask from "./components/AddTask";
var destination = document.querySelector("#root");

class App extends Component {
  render() {
    return (
        <AddTask/>
    );
  }
}

export default App;
