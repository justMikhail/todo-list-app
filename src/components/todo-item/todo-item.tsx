import './todo-item.scss';
import {TodoType} from '../../types/todo-type';
import {getDescriptionWithProbability} from '../../utils/utils';

type TodoItemType = {
  todoData: TodoType;
  onTodoItemClickHandler: (id: number) => void;
}

function TodoItem(props: TodoItemType): JSX.Element {
  const {todoData, onTodoItemClickHandler} = props;
  const description = getDescriptionWithProbability(todoData.title);
  const isCompleted = todoData.completed;


  return (
    <li className="todo-item">
      <label className="todo-item__check">
        <input
          className="todo-item__check-input"
          type="checkbox"
          checked={isCompleted}
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
