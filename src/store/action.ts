import {createAction} from '@reduxjs/toolkit';

import {ActionType} from '../types/action-type';
import {TodoType} from '../types/todo-type';

export const loadAllTodosData = createAction(
  ActionType.LoadTodosData,
  (todosData: TodoType[]) => ({
    payload: todosData,
  }),
);
