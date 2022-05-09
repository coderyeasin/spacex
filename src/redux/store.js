import { configureStore } from '@reduxjs/toolkit';
import spaceReducer from './slices/spacexSlice';

const store = configureStore({
    reducer: { spaceReducer },
});

export default store;
