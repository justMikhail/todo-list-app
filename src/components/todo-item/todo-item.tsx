import {useDispatch} from 'react-redux';
import {changeTodoCompleteStatus} from '../../store/action';
import {TodoType} from '../../types/todo-type';
import './todo-item.scss';

type TodoItemType = {
  todoData: TodoType;
}

function TodoItem(props: TodoItemType): JSX.Element {
  const {todoData} = props;
  const isCompleted = todoData.completed;
  const dispatch  = useDispatch();
  const onTodoItemClickHandler: React.ChangeEventHandler<HTMLInputElement>  = (event) => dispatch(changeTodoCompleteStatus(parseInt(event.target.dataset.id ?? '', 10)));

  return (
    <li className="todo-item">
      <label className="todo-item__check">
        <input
          className="todo-item__check-input"
          type="checkbox"
          checked={isCompleted}
          disabled={false}
          data-id={todoData.id}
          onChange={onTodoItemClickHandler}
        />
        <span className="todo-item__check-box"/>
        <p className="todo-item__text">{todoData.title}</p>
        {todoData.description && (
          <p className="todo-item__description">
            {todoData.description}
          </p>
        )}
      </label>
    </li>
  );
}

export default TodoItem;
