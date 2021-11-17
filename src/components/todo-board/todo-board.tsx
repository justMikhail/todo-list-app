import TodoList from '../todo-list/todo-list';
import {useSelector} from 'react-redux';
import {getTodosData} from '../../store/app-data/selectors';

function TodoBoard(): JSX.Element {
  const data = useSelector(getTodosData);
  console.log(data);

  return (
    <>
      <div>Todo Board</div>
      <TodoList />
    </>
  );
}

export default TodoBoard;
