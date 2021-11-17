import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {TodoType} from '../../types/todo-type';

export const getAllTodosData = (state: State): TodoType[] => state[NameSpace.data].allTodosData;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
