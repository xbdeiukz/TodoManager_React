import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import "./index.css";

export default class TodoHeader extends Component {
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          className="todo-input"
          placeholder="输入待办事项，按回车键添加"
          onKeyUp={this.keyUpHandler}
        />
      </div>
    );
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  keyUpHandler = (event) => {
    const e = event || window.event;
    const target = e.target || e.srcElement;
    const { keyCode } = e;
    const { addTodo } = this.props;

    let inputValue = target.value.trim();

    if (inputValue.length < 1) return;

    if (keyCode === 13) {
      addTodo({
        id: nanoid(),
        name: inputValue,
        done: false,
      });

      target.value = "";
    }
  };
}
