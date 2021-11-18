import TodoItem from '../todo-item/todo-item';
import {TodoType} from '../../types/todo-type';

import './todo-list.scss';

type TodoListType = {
  allTodos: TodoType[];
}

function TodoList(props: TodoListType): JSX.Element {
  const {allTodos} = props;
  const todosForShowing = [...allTodos].slice(0, 5); //todo replace with pagination or scroll

  if (!allTodos.length) {
    return <p>Please, Add your firs todo</p>;
  }

  return (
    <ul className="todo-list">
      {todosForShowing.map((todo) =>
        (
          <TodoItem
            key={todo.id}
            title={todo.title}
          />
        ),
      )}
    </ul>
  );
}

export default TodoList;
