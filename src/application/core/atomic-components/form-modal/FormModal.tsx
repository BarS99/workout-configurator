import styles from './FormModal.module.scss';
import NewPlanForm from '../../form-components/new-plan-form/NewPlanForm';

interface ChildProps {
    title: string;
}

const FormModal = (props: ChildProps): JSX.Element => (
    <div className={styles['form-modal']}>
        <div>
            <h2>{props.title}</h2>
        </div>
        <NewPlanForm />
    </div>
);

export default FormModal;
