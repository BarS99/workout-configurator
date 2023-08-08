import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainingPlan } from './../../types/training-plan';
import dbData from '../../assets/db.json';

export interface TrainingPlanState {
    TrainingPlans: TrainingPlan[];
}

const initialState: TrainingPlanState = {
    TrainingPlans: dbData.plans
};

const TrainingPlanSlice = createSlice({
    name: 'trainingPlan',
    initialState,
    reducers: {
        createPlan(state, action: PayloadAction<TrainingPlan>) {
            state.TrainingPlans = [action.payload, ...state.TrainingPlans];
        },

        deletePlan(state, action: PayloadAction<TrainingPlan>) {
            state.TrainingPlans = state.TrainingPlans.filter((plan) => plan.id !== action.payload.id);
        }
    }
});

export const { deletePlan } = TrainingPlanSlice.actions;
export default TrainingPlanSlice.reducer;
