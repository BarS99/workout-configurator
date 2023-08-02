import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import HorizontalCard from '../../components/HorizontalCard';
import { useSelector } from 'react-redux';
import { TrainingPlan } from '../../types/training-plan';
import { TrainingPlanState } from '../../store/reducers/trainingPlanReducer';

const CreatorPlanPage = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const plans: TrainingPlan[] = useSelector((state: TrainingPlanState) => state.TrainingPlans);

    return (
        <Box>
            {id ? (
                <Box>
                    <h1>Card with ID {id}</h1>
                </Box>
            ) : (
                <Box>
                    {plans.map((plan) => (
                        <HorizontalCard key={plan.id} {...plan} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default CreatorPlanPage;
