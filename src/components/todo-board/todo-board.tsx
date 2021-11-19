import {useSelector} from 'react-redux';
import {getAllTodosData, getLoadedDataStatus} from '../../store/app-data/selectors';
import Loader from '../loader/loader';
import TodoList from '../todo-list/todo-list';
import './todo-board.scss';

function TodoBoard(): JSX.Element {
  const allTodosData = useSelector(getAllTodosData);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  return (
    <article className="todo-board">
      <div className="todo-board__header">
        <h1 className="todo-board__title">Todo List</h1>
        <button className="todo-board__add-button">Add</button>
      </div>
      {isDataLoaded
        ? <TodoList allTodos={allTodosData} />
        : <Loader />}
    </article>
  );
}

export default TodoBoard;
