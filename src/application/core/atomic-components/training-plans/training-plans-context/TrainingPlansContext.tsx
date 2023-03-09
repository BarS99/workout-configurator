import { createContext } from 'react';
import { TrainingPlansContextData } from '../../../models/TrainingPlan';

export const TrainingPlansContext = createContext<TrainingPlansContextData>({
    plansList: [],
    addToList: () => {},
    clearList: () => {}
});
