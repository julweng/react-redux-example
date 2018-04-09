import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

class ToDo extends Component {
  
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
      return (
        <TodoItem key={todo.title} todo={todo} />
      );  
    });
  }
    
    return (
      <div className = "Projects">
        <h3>Todo List</h3> <br />
        {todoItems} 
      </div>
    )
  }
}

ToDo.propTypes ={
  todos: PropTypes.array
}

export default ToDo;