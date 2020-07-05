import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters_val: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log("app constructed");
  }
  handleDelete = (counterId) => {
    const counters_val = this.state.counters_val.filter(
      (c) => c.id != counterId
    );
    this.setState({ counters_val });
  };
  handleReset = () => {
    const counters_val = this.state.counters_val.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters_val });
  };
  handleIncrement = (cnt) => {
    const counters_val = this.state.counters_val;
    const index = counters_val.indexOf(cnt);
    counters_val[index].value++;
    this.setState({ counters_val });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters_val.filter((cnt) => cnt.value > 0).length
          }
        ></NavBar>

        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counters_val={this.state.counters_val}
        ></Counters>
      </React.Fragment>
    );
  }
}

export default App;
