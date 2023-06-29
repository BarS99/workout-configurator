import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button } from '@mui/material';

import NewPlanForm from '../../../form-components/new-plan-form/NewPlanForm';
import ReusableModal from './ReusableModal';

const FormModal = (): JSX.Element => {
    const { t } = useTranslation('common');

    const [open, setOpen] = useState(false);
    const handleOpen = (): void => setOpen(true);
    const handleClose = (): void => setOpen(false);
    const handleSave = (): void => {
        handleClose();
    };

    return (
        <Box>
            <Button variant="contained" onClick={handleOpen}>
                {t('createPlan')}
            </Button>
            <ReusableModal
                title={t('newPlanTitle')}
                open={open}
                onClose={handleClose}
                onSave={handleSave}
                formComponent={<NewPlanForm />}
            />
        </Box>
    );
};

export default FormModal;
