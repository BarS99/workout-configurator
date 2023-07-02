import { useRoutes } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import IndexLayout from '../layouts/IndexLayout';

const Router = (): React.ReactElement | null =>
    useRoutes([
        {
            path: '',
            element: <IndexLayout />,
            children: [
                {
                    path: '',
                    element: <IndexPage />
                }
            ]
        }
    ]);

export default Router;
