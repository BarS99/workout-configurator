import { useTranslation } from 'react-i18next';
import { Box, Container, Typography } from '@mui/material';

const Footer = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                backgroundColor: 'primary.main',
                color: 'white',
                textAlign: 'center'
            }}>
            <Container maxWidth="md">
                <Typography variant="body2">{t('footer.copyright')}</Typography>
            </Container>
        </Box>
    );
};
export default Footer;
