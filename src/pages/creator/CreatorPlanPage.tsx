import HorizontalCard from '../../components/HorizontalCard';
import { useSelector } from 'react-redux';
import { TrainingPlan } from '../../types/training-plan';
import { Box } from '@mui/material';
import { RootState } from '../../store/rootReducer';

const CreatorPlanPage = (): JSX.Element => {
    // const plans: TrainingPlan[] = useSelector((state: TrainingPlanState) => state.TrainingPlans);
    const plans: TrainingPlan[] = useSelector((state: RootState) => state.trainingPlans.TrainingPlans);

    return (
        <Box>
            {plans.map((plan) => (
                <HorizontalCard key={plan.id} {...plan} />
            ))}
        </Box>
    );
};

export default CreatorPlanPage;
