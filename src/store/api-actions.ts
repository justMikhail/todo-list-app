import {ThunkActionResult} from '../types/action';
import {loadAllTodosData} from './action';
import {APIRoute} from '../const/routs';
import {TodoType} from '../types/todo-type';
import {returnValueWithProbability} from '../utils/utils';

export const fetchTodosDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Omit<TodoType, 'description'>[]>(APIRoute.AllTodos);
    const transformedData = data.map((todoItem) => ({
      ...todoItem,
      description: returnValueWithProbability<string>(todoItem.title, 0.25),
    }));
    dispatch(loadAllTodosData(transformedData));
  };

