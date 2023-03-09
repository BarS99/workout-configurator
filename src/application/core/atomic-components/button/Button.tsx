import styles from './Button.module.scss';
import { ButtonTheme, ButtonSize } from '../../models/Button.model';

const Button = ({
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.LG,
    type = 'button',
    children
}: {
    theme?: ButtonTheme;
    size?: ButtonSize;
    type?: 'submit' | 'reset' | 'button' | undefined;
    children: React.ReactNode;
}): JSX.Element => (
    <button type={type} className={`${styles['button']} ${styles[`button--${theme}`]} ${styles[`button--${size}`]}`}>
        {children}
    </button>
);
export default Button;
