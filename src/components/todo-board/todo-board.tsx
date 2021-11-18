import TodoList from '../todo-list/todo-list';
import './todo-board.scss';

function TodoBoard(): JSX.Element {

  return (
    <article className="todo-board">
      <div className="todo-board__header">
        <h1 className="todo-board__title">Todo List</h1>
        <button className="todo-board__add-button">
          Add
        </button>
      </div>
      <TodoList />
    </article>
  );
}

export default TodoBoard;
