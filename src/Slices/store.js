import { configureStore } from "@reduxjs/toolkit";

import logRed from './loginSlice';

export const store = configureStore({
    reducer:{
        logReducer: logRed,
    },
});