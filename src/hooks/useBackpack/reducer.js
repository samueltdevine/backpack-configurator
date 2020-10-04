import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    backpack: {
        name: "",
        weight: "",
        capacity: 0,
        image: ""
    },
    items: []
};

export const backpackSlice = createSlice({
    name: "backpack",
    initialState, reducers: {
        selectBackpack: (state, action) => ({...state}),
        addItemToBackpack: (state, action) => ({...state}),
        removeItemFromBackpack: (state, action) => ({...state})
    }
});

export const {selectBackpack, addItemToBackpack, removeItemFromBackpack} = backpackSlice.actions;

export default backpackSlice.reducer;