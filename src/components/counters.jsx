import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters_val } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-small m-2">
          Reset
        </button>
        {counters_val.map((cnt) => (
          <Counter
            key={cnt.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            cnt={cnt}
          >
            {/* <h3>Title #{cnt.id}</h3> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
