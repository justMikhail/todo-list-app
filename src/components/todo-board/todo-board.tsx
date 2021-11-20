import {useSelector} from 'react-redux';
import {Transition} from 'react-transition-group';
import {getAllTodosData, getLoadedDataStatus} from '../../store/app-data/selectors';
import Loader from '../loader/loader';
import TodoList from '../todo-list/todo-list';
import './todo-board.scss';

function TodoBoard(): JSX.Element {
  const allTodosData = useSelector(getAllTodosData);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  return (
    <article className="todo-board">
      <div className="todo-board__inner">
        <div className="todo-board__header">
          <h1 className="todo-board__title">Todo list</h1>
          <button className="todo-board__add-button">Add</button>
        </div>
        {isDataLoaded
          ? <TodoList allTodos={allTodosData} />
          : <Loader />}
      </div>
      <Transition in={isDataLoaded} timeout={500}>
        {(state) => <div className={`todo-bard__decor-bgr todo-bard__decor-bgr--first ${state}`}></div>}
      </Transition>
      <Transition in={isDataLoaded} timeout={500}>
        {(state) => <div className={`todo-bard__decor-bgr todo-bard__decor-bgr--second ${state}`}></div>}
      </Transition>
    </article>
  );
}

export default TodoBoard;
