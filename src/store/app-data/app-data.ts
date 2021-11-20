import {createReducer} from '@reduxjs/toolkit';
import {AppData} from '../../types/state';
import {changeTodoCompleteStatus, hideApiError, loadAllTodosData, showApiError} from '../action';

const initialState: AppData = {
  allTodosData: [],
  isDataLoaded: false,
  apiErrorMessage: null,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllTodosData, (state, action) => {
      const {allTodosData} = action.payload;

      state.allTodosData = allTodosData;
      state.isDataLoaded = true;
    })
    .addCase(changeTodoCompleteStatus, (state, action) => {
      state.allTodosData = state.allTodosData.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        } return todo;
      });
    })
    .addCase(showApiError, (state, action) => {
      state.apiErrorMessage = action.payload;
    })
    .addCase(hideApiError, (state) => {
      state.apiErrorMessage = null;
    });
});

export {appData};
