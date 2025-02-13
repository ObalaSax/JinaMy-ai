import { configureStore } from "@reduxjs/toolkit";
import { jinaMyApi } from "../Api/JinaMyApi";

export const jinaStore = configureStore({
  reducer: {
    [jinaMyApi.reducerPath]: jinaMyApi.reducer,
  },
});
