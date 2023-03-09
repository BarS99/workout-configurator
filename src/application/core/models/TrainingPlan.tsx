export interface TrainingPlan {
    name: string;
    desc: string;
}

export interface TrainingPlansContextData {
    plansList: TrainingPlan[];
    addToList: (newObject: { name: string; desc: string }) => void;
    clearList: () => void;
}
