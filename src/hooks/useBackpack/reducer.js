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
        selectBackpack: (state, action) => ({...state, backpack: action.payload}),
        addItemToBackpack: (state, action) => ({...state, items: state.items.concat([action.payload])}),
        removeItemFromBackpack: (state, action) => ({...state, items: state.items.filter(item => item.id !== action.payload)})
    }
});

export const {selectBackpack, addItemToBackpack, removeItemFromBackpack} = backpackSlice.actions;

export default backpackSlice.reducer;