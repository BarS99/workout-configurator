import styles from './TrainingPlansList.module.scss';
import { TrainingPlansContextData } from '../../../models/TrainingPlan';
import { useContext } from 'react';
import { TrainingPlansContext } from '../../../store/TrainingPlansContext';

const TrainingPlansList = (): JSX.Element => {
    const { plansList } = useContext<TrainingPlansContextData>(TrainingPlansContext);

    return (
        <div className={styles['taining-plans-list']}>
            <ul>
                {plansList.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.desc}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainingPlansList;
