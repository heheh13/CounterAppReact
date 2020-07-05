import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: this.props.cnt.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  renderTags() {
    if (this.state.tags.length === 0) return <p>there is no paragraphs</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag + 1}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/* {this.props.children} */}

        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.cnt)}
          className="btn btn-secondary btn-sm"
        >
          increment
        </button>
        {/* {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.cnt.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 ";
    classes += this.props.cnt.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const cnt = this.props.cnt;
    return cnt.value === 0 ? "Zero" : cnt.value;
  }
}

export default Counter;
