import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Container } from '@mui/material';

const IndexLayout = (): JSX.Element => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            minHeight: '100vh'
        }}>
        <Header />
        <Container sx={{ flexGrow: 1, width: '100$', py: 6 }} component="main">
            <Outlet />
        </Container>
        <Footer />
    </Box>
);

export default IndexLayout;
