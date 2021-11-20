import {ThunkActionResult} from '../types/action';
import {loadAllTodosData} from './action';
import {APIRoute} from '../const/routs';
import {TodoType} from '../types/todo-type';
import {returnValueWithProbability} from '../utils/utils';
import {showApiError, hideApiError} from './action';

export const fetchTodosDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(hideApiError);
    try {
      const {data} = await api.get<Omit<TodoType, 'description'>[]>(APIRoute.AllTodos);
      const transformedData = data.map((todoItem) => ({
        ...todoItem,
        description: returnValueWithProbability<string>(todoItem.title, 0.25),
      }));
      dispatch(loadAllTodosData(transformedData));
    } catch (error: any) {
      dispatch(showApiError(error.message));
    }
  };

