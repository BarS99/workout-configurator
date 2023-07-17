import { Box } from '@mui/material';
import HorizontalCard from '../../components/HorizontalCard';
import { useSelector } from 'react-redux';
import { TrainingPlan } from '../../types/training-plan';
import { TrainingPlanState } from '../../store/reducers/trainingPlanReducer';

const CreatorPlanPage = (): JSX.Element => {
    const plans: TrainingPlan[] = useSelector((state: TrainingPlanState) => state.TrainingPlans);
    return (
        <Box>
            {plans.map((plan) => (
                <HorizontalCard key={plan.id} {...plan} />
            ))}
        </Box>
    );
};
export default CreatorPlanPage;
