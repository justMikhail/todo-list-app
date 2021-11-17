import {ThunkActionResult} from '../types/action';
import {loadAllTodosData} from './action';
import {APIRoute} from '../const';
import {TodoType} from '../types/todo-type';

export const fetchTodosDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<TodoType[]>(APIRoute.AllTodos);
    dispatch(loadAllTodosData(data));
  };

