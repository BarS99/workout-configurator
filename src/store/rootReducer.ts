import trainingPlanReducer from './reducers/trainingPlanReducer';
import planDayReducer from './reducers/planDayReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    trainingPlans: trainingPlanReducer,
    planDays: planDayReducer
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
