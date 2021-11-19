import {useSelector} from 'react-redux';
import {getAllTodosData, getLoadedDataStatus} from '../../store/app-data/selectors';
import Loader from '../loader/loader';
import TodoList from '../todo-list/todo-list';
import './todo-board.scss';
//import {changeTodoCompleteStatus} from '../../store/action';

function TodoBoard(): JSX.Element {
  const allTodosData = useSelector(getAllTodosData);
  const isDataLoaded = useSelector(getLoadedDataStatus);
  //const dispatch = useDispatch();

  //const handleTodoItemClick = (currentTodoItemId: number) => {
  //  console.log(currentTodoItemId);
  //  allTodosData.map((todo) => {
  //    if (todo.id === currentTodoItemId) {
  //      todo.completed = !todo.completed;
  //    }
  //    return todo;
  //  });
  //  dispatch(changeTodoCompleteStatus(allTodosData));
  //};

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
