import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { PlanDay } from '../../types/training-day';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const CreatorDayPage = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const plans: PlanDay[] = useSelector((state: RootState) => state.planDays.PlanDays);

    return (
        <Box>
            Plan {id}
            <Box>
                {plans
                    .filter((planDay) => planDay.planId == id)
                    .map((planDay) => (
                        <Box key={planDay.id}>{planDay.name}</Box>
                    ))}
            </Box>
        </Box>
    );
};
export default CreatorDayPage;
