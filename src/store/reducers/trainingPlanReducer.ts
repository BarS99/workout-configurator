import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TrainingPlan } from './../../types/training-plan';
import { examplePlans } from '../dummy-content';

export interface TrainingPlanState {
    TrainingPlans: TrainingPlan[];
}

const initialState: TrainingPlanState = {
    TrainingPlans: examplePlans
};

const TrainingPlanSlice = createSlice({
    name: 'trainingPlan',
    initialState,
    reducers: {
        createPlan(state, action: PayloadAction<TrainingPlan>) {
            state.TrainingPlans = [action.payload, ...state.TrainingPlans];
        },
        // renamePlan(state, action: PayloadAction<TrainingPlan>) {},
        deletePlan(state, action: PayloadAction<TrainingPlan>) {
            state.TrainingPlans.filter((plan) => plan.id !== action.payload.id);
        }
    }
});

export const { deletePlan } = TrainingPlanSlice.actions;
export default TrainingPlanSlice.reducer;
