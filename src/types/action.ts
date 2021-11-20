import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  LoadAllTodosData = 'api/loadAllTodosData',
  ChangeTodoCompleteStatus = 'data/changeTodoCompleteStatus',
  ShowApiError = 'api/showApiError',
  HideApiError = 'api/hideApiError'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
