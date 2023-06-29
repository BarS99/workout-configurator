import styles from './TrainingPlansList.module.scss';
import { TrainingPlansContextData } from '../../../models/TrainingPlan';
import { useContext } from 'react';
import { TrainingPlansContext } from '../../../store/TrainingPlansContext';
import { Box } from '@mui/material';

const TrainingPlansList = (): JSX.Element => {
    const { plansList } = useContext<TrainingPlansContextData>(TrainingPlansContext);

    return (
        <Box className={styles['training-plans-list']}>
            <ul>
                {plansList.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </Box>
    );
};

export default TrainingPlansList;
