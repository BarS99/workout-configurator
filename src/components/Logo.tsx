import { Box } from '@mui/material';
import logoSrc from '../assets/images/logo.png';
const Logo = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex' }}>
            <img height={'50px'} src={logoSrc} alt="application logotype" />
        </Box>
    );
};
export default Logo;
