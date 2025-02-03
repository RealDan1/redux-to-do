import { createSlice } from '@reduxjs/toolkit';

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: [
        { id: 0, text: 'Homework', completed: false },
        { id: 1, text: 'Gardening', completed: false },
    ],
    reducers: {
        addToDo: (state, action) => {
            const { text, id } = action.payload;
            state.push({ id: id, text: text, completed: false }); // push the string to the new array item
        },
        editToDo: (state, action) => {
            const { id, text } = action.payload; // deconstruct the payload
            return state.map((item) => {
                if (item.id === id) {
                    //for each item in the state array: if the item id matches the id inside the payload:
                    return { ...item, text }; // return a copy of the original item object, plus a modified text field
                } else {
                    return item; //otherwise just return the original item and keep flipping through the state until the item is found
                }
            });
        },
        checkToDo: (state, action) => {
            const { id } = action.payload; //deconstruct the payload
            return state.map((item) => {
                // flip through the whole state array as done previously
                if (item.id === id) {
                    //for each item if the id matches:
                    return { ...item, completed: true }; // return the original item plus a modified "completed" field
                } else {
                    return item; //otherwise keep flipping through the array
                }
            });
        },
        unCheckToDo: (state, action) => {
            const { id } = action.payload; // deconstruct the payload
            return state.map((item) => {
                // flip through the whole state array as done previously
                if (item.id === id) {
                    //for each item if the id matches:
                    return { ...item, completed: false }; // return the original item plus a modified "completed" field
                } else {
                    return item; //otherwise keep flipping through the array
                }
            });
        },
        deleteToDo: (state, action) => {
            const { id } = action.payload;
            return state.filter((item) => item.id !== id); // filter - only keep the items that DON'T match the id of the send ID - return that to state
        },
    },
});

export const { addToDo, editToDo, checkToDo, unCheckToDo, deleteToDo } = toDoListSlice.actions;
export default toDoListSlice.reducer;
