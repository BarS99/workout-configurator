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

const TrainingPlansProvider = ({ children }: TrainingPlansProps): JSX.Element => {
    const localStoragePlans = JSON.parse(localStorage.getItem('plansList') || '[]');
    const [plansList, setPlansList] = useState<TrainingPlan[]>(localStoragePlans);

    const addToList = (newObject: TrainingPlan): void => {
        localStorage.setItem('plansList', JSON.stringify([...plansList, newObject]));
        setPlansList([...plansList, newObject]);
    };

    const clearList = (): void => setPlansList([]);

    // eslint-disable-next-line prettier/prettier
    return (
        <TrainingPlansContext.Provider value={{ plansList, addToList, clearList }}>
            {children}
        </TrainingPlansContext.Provider>
    );
};

export default TrainingPlansProvider;
