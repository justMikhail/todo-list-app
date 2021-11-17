import {RootState} from '../store/root-reducer';
import {TodoType} from './todo-type';

export type AppDataType = {
  allTodosData: TodoType[],
  isDataLoaded: boolean,
}

export type StateType = RootState;
