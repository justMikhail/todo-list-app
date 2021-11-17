import {createReducer} from '@reduxjs/toolkit';

import {loadAllTodosData} from '../action';
import {AppDataType} from '../../types/state-type';

const initialState: AppDataType = {
  allTodosData: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllTodosData, (state, action) => {

      state.allTodosData = action.payload;
      state.isDataLoaded = true;
    });
});

export {appData};
