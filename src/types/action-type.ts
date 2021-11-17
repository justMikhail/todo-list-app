import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';

import {StateType} from './state-type';

export enum ActionType {
  LoadTodosData = 'data/loadTodosData',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, StateType, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<StateType, AxiosInstance, Action>;
