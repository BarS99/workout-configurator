import { useRoutes } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import IndexLayout from '../layouts/Index/IndexLayout';
import TrainingPage from '../pages/training/TrainingPage';
import CreatorPlanPage from '../pages/creator/CreatorPlanPage';
import AnalyticsPage from '../pages/analytics/AnalyticsPage';

const Router = (): React.ReactElement | null =>
    useRoutes([
        {
            path: '',
            element: <IndexLayout />,
            children: [
                {
                    path: '',
                    element: <IndexPage />
                },
                {
                    path: '/training',
                    element: <TrainingPage />
                },
                {
                    path: '/creator/:id',
                    element: <CreatorPlanPage />
                },
                {
                    path: '/creator',
                    element: <CreatorPlanPage />
                },
                {
                    path: '/analytics',
                    element: <AnalyticsPage />
                }
            ]
        }
    ]);

export default Router;
