import { Outlet } from 'react-router';
import styles from './IndexLayout.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/footer/Footer';

const IndexLayout = (): JSX.Element => (
    <div className={styles['index-layout']}>
        <Header />
        <main className={styles['index-layout__content']}>
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default IndexLayout;
