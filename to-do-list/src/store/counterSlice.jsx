import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
    name: 'count',
    initialState: { value: 2 }, // default is two since there are already two items in the list by default
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
