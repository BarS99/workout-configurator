import { Outlet } from 'react-router';
import styles from './IndexLayout.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/footer/Footer';
import { Container } from '@mui/material';

const IndexLayout = (): JSX.Element => (
    <div className={styles['index-layout']}>
        <Header />
        <Container className={styles['index-layout__content']}>
            <Outlet />
        </Container>
        <Footer />
    </div>
);

export default IndexLayout;
