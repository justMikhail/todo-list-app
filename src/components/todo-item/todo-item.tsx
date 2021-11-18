
type TodoItemType = {
  title: string;
}

function TodoItem(props: TodoItemType): JSX.Element {
  const {title} = props;

  return (
    <li className="todo-item">
      <label className="todo-item__check check">
        <input className="check__input visually-hidden" type="checkbox"/>
        <span className="check__box"/>
        {title}
        <p className="todo-item__description">
          Lorem ipsum dolor sit amet.
        </p>
      </label>
    </li>
  );
}

export default TodoItem;
