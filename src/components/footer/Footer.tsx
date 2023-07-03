import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import { Container } from '@mui/material';

const Footer = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <footer className={styles['footer']}>
            <Container maxWidth="md">
                <p>{t('footer.copyright')}</p>
            </Container>
        </footer>
    );
};
export default Footer;
