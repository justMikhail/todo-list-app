import {RootState} from '../store/root-reducer';
import {TodoType} from './todo-type';

export type AppData = {
  allTodosData: TodoType[],
  isDataLoaded: boolean,
};

export type State = RootState;
