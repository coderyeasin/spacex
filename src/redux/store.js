import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './spacexSlice';

const store = configureStore({
    reducer: { counterReducer },
});

export default store;
