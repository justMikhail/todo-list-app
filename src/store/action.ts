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

export const changeTodoCompleteStatus = createAction(
  ActionType.ChangeTodoCompleteStatus,
  (changedTodoId) => ({
    payload: changedTodoId,
  }),
);

export const showApiError = createAction(
  ActionType.ShowApiError,
  (errorMessage) => ({
    payload: errorMessage,
  }),
);

export const hideApiError = createAction(
  ActionType.HideApiError,
);
