import { TrainingDay } from './training-day';

export interface TrainingPlan {
    id: string;
    name: string;
    desc: string;
    days: TrainingDay[];
}
