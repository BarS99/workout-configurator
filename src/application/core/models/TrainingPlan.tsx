export interface TrainingPlan {
    name: string;
}

export interface TrainingPlansContextData {
    plansList: TrainingPlan[];
    addToList: (newObject: TrainingPlan) => void;
    clearList: () => void;
}
