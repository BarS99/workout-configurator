import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <footer className={styles['footer']}>
            <p>{t('footer.copyright')}</p>
        </footer>
    );
};
export default Footer;
