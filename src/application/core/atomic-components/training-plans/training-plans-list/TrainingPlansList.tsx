import { useContext } from 'react';
import { useEffect } from 'react';
import styles from './TrainingPlansList.module.scss';
import { TrainingPlansContext } from '../../../store/TrainingPlansContext';

const TrainingPlansList = (): JSX.Element => {
    const { plansList } = useContext(TrainingPlansContext);

    useEffect(() => {
        console.log(plansList);
    }, [plansList]);

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
