import {useSelector} from 'react-redux';
import {getAllTodosData} from '../../store/app-data/selectors';
import TodoItem from '../todo-item/todo-item';

import './todo-list.scss';

function TodoList(): JSX.Element {
  const allTodos = useSelector(getAllTodosData);

  return (
    <ul className="todo-list">
      {allTodos.map((todo) =>
        (
          <TodoItem key={todo.id}/>
        ),
      )}
    </ul>
  );
}

export default TodoList;
