import {NameSpace} from '../root-reducer';
import {StateType} from '../../types/state-type';
import {TodoType} from '../../types/todo-type';

export const getTodosData = (state: StateType): TodoType[] => state[NameSpace.data].allTodosData;
export const getLoadedDataStatus = (state: StateType): boolean => state[NameSpace.data].isDataLoaded;
