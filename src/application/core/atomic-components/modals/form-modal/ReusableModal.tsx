import React from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import styles from './FormModal.module.scss';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    title: string;
    open: boolean;
    onClose?: () => void;
    onSave?: () => void;
    formComponent?: React.ReactNode;
}

const ReusableModal: React.FC<ModalProps> = ({ title, open, onClose, onSave, formComponent }) => {
    const { t } = useTranslation('common');
    return (
        <Modal open={open} onClose={onClose}>
            <Box className={styles['modal']} sx={{ bgcolor: 'background.paper' }}>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                {formComponent}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 2 }}>
                    <Button variant="contained" onClick={onSave}>
                        {t('saveButton')}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ReusableModal;
