import { useRoutes } from 'react-router-dom';
import MainLayout from '../application/core/layouts/main-layout/MainLayout';
import IndexPage from '../application/core/pages/index/IndexPage';

const Router = (): React.ReactElement | null =>
    useRoutes([
        {
            path: '',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <IndexPage />
                }
            ]
        }
    ]);

export default Router;
