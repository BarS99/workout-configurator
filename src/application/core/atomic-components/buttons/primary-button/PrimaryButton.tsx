import { ButtonTheme, ButtonSize } from '../../../models/Button.model';
import { Button } from '@mui/material';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
    theme?: ButtonTheme;
    size?: ButtonSize;
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: () => void;
    children: React.ReactNode;
}

const PrimaryButton = ({
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.SM,
    type = 'button',
    onClick,
    children
}: PrimaryButtonProps): JSX.Element => (
    <Button
        type={type}
        variant="contained"
        onClick={onClick}
        className={`${styles['button']} ${styles[`button--${theme}`]} ${styles[`button--${size}`]}`}>
        {children}
    </Button>
);

export default PrimaryButton;
