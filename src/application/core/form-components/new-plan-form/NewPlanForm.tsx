import { useTranslation } from 'react-i18next';
import { useState, useContext } from 'react';
import styles from './NewPlanForm.module.scss';
import { TrainingPlansContext } from '../../store/TrainingPlansContext';
import { Box, TextField } from '@mui/material';

const NewPlanForm = (): JSX.Element => {
    const { t } = useTranslation('common');

    const [enteredPlanName, setEnteredPlanName] = useState('');
    const { addToList } = useContext(TrainingPlansContext);

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredPlanName(event.target.value);
    };

    const planSubmitHandler = (e: React.SyntheticEvent): void => {
        e.preventDefault();

        const trainingPlanData = {
            name: enteredPlanName
        };

        addToList(trainingPlanData);
        setEnteredPlanName('');
    };

    return (
        <Box className={styles['new-plan-form']}>
            <form onSubmit={planSubmitHandler}>
                <Box>
                    <TextField
                        id="planTitle"
                        label={t('planTitle')}
                        value={enteredPlanName}
                        onChange={titleChangeHandler}
                    />
                </Box>
            </form>
        </Box>
    );
};

export default NewPlanForm;
