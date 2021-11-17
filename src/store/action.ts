import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {TodoType} from '../types/todo-type';

export const loadAllTodosData = createAction(
  ActionType.LoadAllTodosData,
  (allTodosData: TodoType[]) => ({
    payload: {
      allTodosData,
    },
  }),
);

