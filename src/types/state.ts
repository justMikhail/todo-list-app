import {RootState} from '../store/root-reducer';
import {TodoType} from './todo-type';

export type AppData = {
  allTodosData: TodoType[];
  isDataLoaded: boolean;
  apiErrorMessage: string | null;
};

export type State = RootState;
