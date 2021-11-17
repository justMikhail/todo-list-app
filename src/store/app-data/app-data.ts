import {createReducer} from '@reduxjs/toolkit';
import {AppData} from '../../types/state';
import {loadAllTodosData} from '../action';

const initialState: AppData = {
  allTodosData: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllTodosData, (state, action) => {
      const {allTodosData} = action.payload;

      state.allTodosData = allTodosData;
      state.isDataLoaded = true;
    });
});

export {appData};
