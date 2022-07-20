import { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    return (
      <div
        className="todo-item"
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <label htmlFor={"todo-check-" + todo.id}>
          <input
            type="checkbox"
            id={"todo-check-" + todo.id}
            checked={todo.done}
            onChange={this.changeHandler}
          />
          <span className="todo-content">{todo.name}</span>
        </label>
        <button className="delete-btn" onClick={this.deleteHandler}>
          删除
        </button>
      </div>
    );
  }

  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  mouseEnterHandler = (event) => {
    const e = event || window.event;

    const oTodoItem = e.currentTarget;
    const oDeleteBtn = oTodoItem.getElementsByClassName("delete-btn")[0];
    const oLabel = oTodoItem.getElementsByTagName("label")[0];

    oTodoItem.style.backgroundColor = "#eee";
    oDeleteBtn.style.display = "block";
    oLabel.className += " left";
  };

  mouseLeaveHandler = (event) => {
    const e = event || window.event;

    const oTodoItem = e.currentTarget;
    const oDeleteBtn = oTodoItem.getElementsByClassName("delete-btn")[0];
    const oLabel = oTodoItem.getElementsByTagName("label")[0];

    oTodoItem.style.backgroundColor = "#fff";
    oDeleteBtn.style.display = "none";
    oLabel.className = "";
  };

  // 更新 todo 的状态（是否已完成）：
  changeHandler = (event) => {
    const e = event || window.event;
    const target = e.target || e.srcElement;

    const { updateTodo } = this.props;

    const done = target.checked;

    updateTodo({
      id: this.props.todo.id,
      done,
    });
  };

  // 根据 id 删除指定的 todo：
  deleteHandler = (event) => {
    const { todo, deleteTodo } = this.props;

    deleteTodo(todo.id);
  };
}
