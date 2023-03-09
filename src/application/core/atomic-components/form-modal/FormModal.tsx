import styles from './FormModal.module.scss';
import NewPlanForm from '../../form-components/new-plan-form/NewPlanForm';
import TrainingPlansProvider from '../training-plans/training-plans-context/TrainingPlansProvider';

interface ChildProps {
    title: string;
}

const FormModal = (props: ChildProps): JSX.Element => (
    <div className={styles['form-modal']}>
        <div>
            <h2>{props.title}</h2>
        </div>
        <TrainingPlansProvider>
            <NewPlanForm />
        </TrainingPlansProvider>
    </div>
);

export default FormModal;
