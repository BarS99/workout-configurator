import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import Container from '../../atomic-components/container/Container';
import { ContainerSize } from '../../models/Container.model';

export const MainLayout = (): JSX.Element => (
    <div className={styles['main-layout']}>
        <Container size={ContainerSize.XL}>
            <Outlet />
        </Container>
    </div>
);

export default MainLayout;
