import {useDispatch} from 'react-redux';

import {getDescriptionWithProbability} from '../../utils/utils';
import {changeTodoCompleteStatus} from '../../store/action';
import {TodoType} from '../../types/todo-type';
import './todo-item.scss';

type TodoItemType = {
  todoData: TodoType;
}

function TodoItem(props: TodoItemType): JSX.Element {
  const {todoData} = props;
  const description = getDescriptionWithProbability(todoData.title);
  const isCompleted = todoData.completed;
  const dispatch  = useDispatch();
  const onTodoItemClickHandler = (id: number) => dispatch(changeTodoCompleteStatus(id));

  return (
    <li className="todo-item">
      <label className="todo-item__check">
        <input
          className="todo-item__check-input"
          type="checkbox"
          checked={isCompleted}
          disabled={false}
          onChange={() => onTodoItemClickHandler(todoData.id)}
        />
        <span className="todo-item__check-box"/>
        <p className="todo-item__text">{todoData.title}</p>
        <p className="todo-item__description">
          {description}
        </p>
      </label>
    </li>
  );
}

export default TodoItem;
