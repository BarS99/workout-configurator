import styles from './NewPlanForm.module.scss';
import Button from '../../atomic-components/button/Button';
const NewPlanForm = (): JSX.Element => (
    <div className={styles['new-plan-form']}>
        <label>
            <p>Nazwa planu</p>
            <input type="text" />
        </label>
        <label>
            <p>Opis planu</p>
            <input type="text" />
        </label>
        <Button>SAVE</Button>
    </div>
);

export default NewPlanForm;
