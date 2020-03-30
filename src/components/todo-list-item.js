import React from "react";
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  onLabelClick = () => {
      console.log(`Done: ${this.props.label}`)
    }
  render () {
    const {label, important = false} = this.props;
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }
    return (
      <span>
        <span style={style} className='todo-list-item'
        onClick={this.onLabelClick}>
          {label}
        </span>
        <button type='button' className='btn btn-outline-success btn-sm'>
          <i className='fa fa-exclamation' />
        </button>
        <button type='button' className='btn btn-outline-danger btn-sm'>
          <i className='fa fa-trash-o' />
        </button>
      </span>
    )
  }
}
