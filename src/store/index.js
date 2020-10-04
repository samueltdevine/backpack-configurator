import { configureStore } from "@reduxjs/toolkit";
import backpackSlice from "hooks/useBackpack/reducer"

export const store = configureStore({
  reducer: {
    backpack: backpackSlice
  },
});
