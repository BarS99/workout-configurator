import styles from './main-layout.module.scss';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Outlet } from 'react-router-dom';

export const MainLayout = (): JSX.Element => (
    <div className={styles.layout}>
        <Button variant="contained" color="secondary">
            <span>Button Test</span>
            <HomeIcon />
        </Button>
        <Outlet />
    </div>
);

export default MainLayout;
