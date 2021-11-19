import {createReducer} from '@reduxjs/toolkit';
import {AppData} from '../../types/state';
import {changeTodoCompleteStatus, loadAllTodosData} from '../action';

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
    })
    .addCase(changeTodoCompleteStatus, (state, action) => {
      state.allTodosData = state.allTodosData.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        } return todo;
      });
    });
});

export {appData};
