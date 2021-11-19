import TodoItem from '../todo-item/todo-item';
import {TodoType} from '../../types/todo-type';

import {useState} from 'react';

import './todo-list.scss';

type TodoListType = {
  allTodos: TodoType[];
}

function TodoList(props: TodoListType): JSX.Element {
  const {allTodos} = props;
  const [todos, setTodos] = useState(allTodos);
  const todosForShowing = todos.slice(0, 5); //todo replace with pagination or scroll

  const handleTodoItemClick = (currentTodoItemId: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === currentTodoItemId) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  if (!allTodos.length) {
    return <p>Please, Add your firs task</p>;
  }

  return (
    <ul className="todo-list">
      {todosForShowing.map((todo) => (
        <TodoItem
          key={todo.id}
          todoData={todo}
          onTodoItemClickHandler={handleTodoItemClick}
        />
      ))}
    </ul>
  );
}

export default TodoList;
