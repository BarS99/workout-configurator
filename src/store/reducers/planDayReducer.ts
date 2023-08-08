import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlanDay } from './../../types/training-day';
import dbData from '../../assets/db.json';

export interface PlanDayState {
    PlanDays: PlanDay[];
}

const initialState: PlanDayState = {
    PlanDays: dbData.planDays
};

const PlanDaySlice = createSlice({
    name: 'planDay',
    initialState,
    reducers: {
        createPlan(state, action: PayloadAction<PlanDay>) {
            state.PlanDays = [action.payload, ...state.PlanDays];
        },

        deletePlan(state, action: PayloadAction<PlanDay>) {
            state.PlanDays = state.PlanDays.filter((plan) => plan.id !== action.payload.id);
        }
    }
});

export const { deletePlan } = PlanDaySlice.actions;
export default PlanDaySlice.reducer;
