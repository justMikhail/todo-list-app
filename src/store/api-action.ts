import {ThunkActionResult} from '../types/action-type';
import {ApiRoute} from '../const/routs';
import {loadAllTodosData} from './action';
import {TodoType} from '../types/todo-type';

export const fetchTodosDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<TodoType[]>(ApiRoute.AllTodos);
    dispatch(loadAllTodosData(data));
  };
