import styles from './Button.module.scss';
import { ButtonTheme, ButtonSize } from '../../models/Button.model';

const Button = ({
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.LG,
    children
}: {
    theme?: ButtonTheme;
    size?: ButtonSize;
    children: React.ReactNode;
}): JSX.Element => <button className={`${styles['button']} ${styles[`button--${theme}`]} ${styles[`button--${size}`]}`}>{children}</button>;
export default Button;
