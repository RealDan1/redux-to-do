import { configureStore } from '@reduxjs/toolkit';
import toDoListReducer from './toDoListSlice';
import countSlice from './counterSlice';

const store = configureStore({
    reducer: {
        toDoList: toDoListReducer,
        count: countSlice,
    },
});

export default store;
