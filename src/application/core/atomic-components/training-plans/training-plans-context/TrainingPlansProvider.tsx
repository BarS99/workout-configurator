import React, { useState } from 'react';
import { TrainingPlansContext } from './TrainingPlansContext';

interface TrainingPlansProps {
    children: React.ReactNode;
}

const TrainingPlansProvider = ({ children }: TrainingPlansProps): JSX.Element => {
    const [plansList, setPlansList] = useState<{ name: string; desc: string }[]>([]);

    const addToList = (newObject: { name: string; desc: string }): void => {
        setPlansList([...plansList, newObject]);
    };

    const clearList = (): void => setPlansList([]);

    return <TrainingPlansContext.Provider value={{ plansList, addToList, clearList }}>{children}</TrainingPlansContext.Provider>;
};
export default TrainingPlansProvider;
