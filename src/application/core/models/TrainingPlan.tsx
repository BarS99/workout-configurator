export interface TrainingPlan {
    name: string;
    desc: string;
}

export interface TrainingPlansContextData {
    plansList: TrainingPlan[];
    addToList: (newObject: TrainingPlan) => void;
    clearList: () => void;
}
