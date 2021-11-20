import TodoItem from '../todo-item/todo-item';
import {TodoType} from '../../types/todo-type';
import './todo-list.scss';

type TodoListType = {
  allTodos: TodoType[];
}

function TodoList(props: TodoListType): JSX.Element {
  const {allTodos} = props;
  const todosPerBoard = allTodos.slice(0, 6); //todo replace with pagination or scroll

  if (!allTodos.length) {
    return <p>Please, Add your firs task</p>;
  }

  return (
    <ul className="todo-list">
      {todosPerBoard.map((todo) => (
        <TodoItem
          key={todo.id}
          todoData={todo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
