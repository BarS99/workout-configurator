import styles from './main-layout.module.scss';
import { Outlet } from 'react-router-dom';

export const MainLayout = (): JSX.Element => (
    <div className={styles.layout}>
        <Outlet />
    </div>
);

export default MainLayout;
