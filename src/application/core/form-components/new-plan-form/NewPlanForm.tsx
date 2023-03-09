import { useTranslation } from 'react-i18next';
import { useState, useContext } from 'react';
import styles from './NewPlanForm.module.scss';
import Button from '../../atomic-components/button/Button';
import { TrainingPlansContext } from '../../store/TrainingPlansContext';
const NewPlanForm = (): JSX.Element => {
    const { t } = useTranslation('common');

    const [enteredPlanName, setEnteredPlanName] = useState('');
    const [enteredPlanDesc, setEnteredPlanDesc] = useState('');
    const { addToList } = useContext(TrainingPlansContext);

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredPlanName(event.target.value);
    };

    const descChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredPlanDesc(event.target.value);
    };

    const planSubmitHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        const expenseData = {
            name: enteredPlanName,
            desc: enteredPlanDesc
        };

        addToList(expenseData);
        setEnteredPlanDesc('');
        setEnteredPlanName('');
    };

    return (
        <div className={styles['new-plan-form']}>
            <form onSubmit={planSubmitHandler}>
                <label>
                    <p>{t('planTitle')}</p>
                    <input type="text" value={enteredPlanName} onChange={titleChangeHandler} />
                </label>
                <label>
                    <p>{t('planDescription')}</p>
                    <input type="text" value={enteredPlanDesc} onChange={descChangeHandler} />
                </label>
                <Button type={'submit'}>{t('saveButton')}</Button>
            </form>
        </div>
    );
};

export default NewPlanForm;
