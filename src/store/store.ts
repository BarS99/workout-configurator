import { configureStore } from '@reduxjs/toolkit';
import trainingPlanReducer from './reducers/trainingPlanReducer';

const store = configureStore({
    reducer: trainingPlanReducer
});

export default store;
