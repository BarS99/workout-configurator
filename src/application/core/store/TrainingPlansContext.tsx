import React, { createContext, useState } from 'react';
import { TrainingPlan, TrainingPlansContextData } from '../models/TrainingPlan';

export const TrainingPlansContext = createContext<TrainingPlansContextData>({
    plansList: [],
    addToList: (): void => {},
    clearList: (): void => {}
});

interface TrainingPlansProps {
    children: React.ReactNode;
}

export const TrainingPlansProvider = ({ children }: TrainingPlansProps): JSX.Element => {
    const [plansList, setPlansList] = useState<TrainingPlan[]>([]);

    const addToList = (newObject: TrainingPlan): void => {
        setPlansList([...plansList, newObject]);
    };

    const clearList = (): void => setPlansList([]);

    return (
        <TrainingPlansContext.Provider value={{ plansList, addToList, clearList }}>
            {children}
        </TrainingPlansContext.Provider>
    );
};

export default TrainingPlansProvider;
