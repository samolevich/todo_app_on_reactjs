import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  state = { done: false, important: false };
  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    });
    console.log(`Done: ${this.props.label}`);
  };
  onMarkImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    });
  };
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span>
        <span className={classNames} onClick={this.onLabelClick}>
          {label}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
