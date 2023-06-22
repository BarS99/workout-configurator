import { ContainerSize } from '../../models/Container.model';
import styles from './Container.module.scss';

const Container = ({ children, size }: { children: React.ReactNode; size?: ContainerSize }): JSX.Element => (
    <div className={`${styles['container']} ${styles[`container--${size}`]}`}>{children}</div>
);

export default Container;
