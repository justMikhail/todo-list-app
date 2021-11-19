import TodoItem from '../todo-item/todo-item';
import {TodoType} from '../../types/todo-type';
import {getDescriptionWithProbability} from '../../utils/utils';

import './todo-list.scss';

type TodoListType = {
  allTodos: TodoType[];
}

function TodoList(props: TodoListType): JSX.Element {
  const {allTodos} = props;
  const todosForShowing = [...allTodos].slice(0, 7); //todo replace with pagination or scroll

  if (!allTodos.length) {
    return <p>Please, Add your firs task</p>;
  }

  return (
    <ul className="todo-list">
      {todosForShowing.map((todo) => {
        const description = getDescriptionWithProbability(todo.title);

        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            description={description}
          />
        );
      },
      )}
    </ul>
  );
}

export default TodoList;
