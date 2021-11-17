import {combineReducers} from '@reduxjs/toolkit';

import {appData} from './app-data/app-data';

export enum NameSpace {
  data = 'DATA',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
});

export type RootState = ReturnType<typeof rootReducer>;
