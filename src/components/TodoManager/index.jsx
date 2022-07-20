import { Component } from "react";
import TodoHeader from "./Header";
import TodoList from "./List";
import TodoFooter from "./Footer";

import "./index.css";

export default class TodoManager extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: "吃饭",
        done: true,
      },
      {
        id: 2,
        name: "睡觉",
        done: true,
      },
      {
        id: 3,
        name: "打豆豆",
        done: false,
      },
    ],
  };

  render() {
    return (
      <div className="todo-wrapper">
        <TodoHeader addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <TodoFooter
          todoCount={this.state.todos.length}
          todoDoneCount={this.todoDoneCount()}
          checkTodos={this.checkTodos}
          clearTodosDone={this.clearTodosDone}
        />
      </div>
    );
  }

  // 添加新的 todo：
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];

    this.setState({
      todos: newTodos,
    });
  };

  // 更新指定 todo 的状态（是否完成）：
  updateTodo = (todoObj) => {
    const { todos } = this.state;

    const newTodos = todos.map((todo, index) => {
      if (todoObj.id === todo.id) {
        return { ...todo, done: todoObj.done };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodos,
    });
  };

  // 获取 todos 的数量：
  todoDoneCount = () => {
    const { todos } = this.state;

    return todos.filter((todo) => todo.done === true).length;
  };

  // 根据 id 删除指定的 todo：
  deleteTodo = (id) => {
    const { todos } = this.state;

    let newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: newTodos,
    });
  };

  // 表所有 todo 标记为已完成或未完成：
  checkTodos = (done) => {
    let { todos } = this.state;

    let newTodos = [];

    if (done) {
      newTodos = todos.map((todo) => {
        todo.done = true;
        return todo;
      });
    } else {
      newTodos = todos.map((todo) => {
        todo.done = false;
        return todo;
      });
    }

    this.setState({
      todos: newTodos,
    });
  };

  // 清除所有已完成的 todo：
  clearTodosDone = () => {
    const { todos } = this.state;
    let newTodos = [];

    newTodos = todos.filter((todo) => {
      return todo.done === false;
    });

    this.setState({
      todos: newTodos,
    });
  };
}
