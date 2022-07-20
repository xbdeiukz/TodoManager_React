import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class TodoFooter extends Component {
  render() {
    const { todoCount, todoDoneCount, clearTodosDone } = this.props;

    return (
      <div className="todo-footer">
        <div className="todo-footer-left">
          <input
            type="checkbox"
            id="todo-check"
            checked={
              todoDoneCount === todoCount && todoCount !== 0 ? true : false
            }
            onChange={this.checkAllHandler}
          />
          <span className="todo-info">
            已完成<span> {todoDoneCount}</span> / 全部<span> {todoCount}</span>
          </span>
        </div>
        <div className="todo-footer-right">
          <button className="btn-danger" onClick={clearTodosDone}>
            清空已完成任务
          </button>
        </div>
      </div>
    );
  }

  checkAllHandler = (event) => {
    const e = event || window.event;
    const target = e.target || e.srcElement;

    const { checkTodos } = this.props;
    checkTodos(target.checked);
  };

  static propTypes = {
    todoCount: PropTypes.number.isRequired,
    todoDoneCount: PropTypes.number.isRequired,
    checkTodos: PropTypes.func.isRequired,
    clearTodosDone: PropTypes.func.isRequired,
  };
}
