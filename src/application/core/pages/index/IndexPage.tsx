import { useTranslation } from 'react-i18next';
import styles from './IndexPage.module.scss';
import ActionCard from '../../atomic-components/action-card/ActionCard';
import TrainingPlansList from '../../atomic-components/training-plans/training-plans-list/TrainingPlansList';
// import CrudCard from '../../atomic-components/crud-card/CrudCard';
import FormModal from '../../atomic-components/form-modal/FormModal';
import TrainingPlansProvider from '../../atomic-components/training-plans/training-plans-context/TrainingPlansProvider';

const Index = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <div className={styles['index-page']}>
            <TrainingPlansProvider>
                <TrainingPlansList />
            </TrainingPlansProvider>
            <ActionCard>{t('createPlan')}</ActionCard>

            {/* <CrudCard>Najelpszy plan</CrudCard> */}
            <FormModal title={t('newPlanTitle')} />
        </div>
    );
};

export default Index;
