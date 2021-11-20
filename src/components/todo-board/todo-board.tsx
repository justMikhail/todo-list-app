import {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Transition} from 'react-transition-group';
import {selectAllTodosData, selectApiError, selectLoadedDataStatus} from '../../store/app-data/selectors';
import {fetchTodosDataAction} from '../../store/api-actions';
import {ErrorMessage} from '../../const/const';
import './todo-board.scss';
import Loader from '../loader/loader';
import TodoList from '../todo-list/todo-list';

function TodoBoard(): JSX.Element {
  const allTodosData = useSelector(selectAllTodosData);
  const isDataLoaded = useSelector(selectLoadedDataStatus);
  const decorFirstRef = useRef(null);
  const decorSecondRef = useRef(null);
  const apiErrorMessage = useSelector(selectApiError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosDataAction());
  }, [dispatch]);

  return (
    <article className="todo-board">
      <div className="todo-board__inner">
        <div className="todo-board__header">
          <h1 className="todo-board__title">Todo list</h1>
          <button className="todo-board__add-button">Add</button>
        </div>
        {apiErrorMessage && <p>{ErrorMessage.ApiError}</p>}
        {(isDataLoaded && !apiErrorMessage)
          ? <TodoList allTodos={allTodosData} />
          : <Loader />}
      </div>
      <Transition nodeRef={decorFirstRef} in={isDataLoaded} timeout={500}>
        {(state) => <div className={`todo-bard__decor-bgr todo-bard__decor-bgr--first ${state}`} ref={decorFirstRef} />}
      </Transition>
      <Transition nodeRef={decorSecondRef} in={isDataLoaded} timeout={500}>
        {(state) => <div className={`todo-bard__decor-bgr todo-bard__decor-bgr--second ${state}`} ref={decorSecondRef} />}
      </Transition>
    </article>
  );
}

export default TodoBoard;
