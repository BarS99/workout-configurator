import { useRoutes } from 'react-router-dom';
import MainLayout from '../application/layouts/main-layout/MainLayout';
import IndexPage from '../application/pages/IndexPage';

const Router = (): React.ReactElement | null => {
    const router = useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <IndexPage />
                }
            ]
        }
    ]);

    return router;
};

export default Router;
