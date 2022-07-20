import { Component } from "react";
import PropTypes from "prop-types";

import TodoItem from "./todo";

import "./index.css";

export default class TodoList extends Component {
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <div className="todo-list">
        <ul>
          {todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
}
