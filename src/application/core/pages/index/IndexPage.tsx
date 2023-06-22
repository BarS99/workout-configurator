import { useTranslation } from 'react-i18next';
import styles from './IndexPage.module.scss';
import ActionCard from '../../atomic-components/action-card/ActionCard';
import TrainingPlansList from '../../atomic-components/training-plans/training-plans-list/TrainingPlansList';
// import CrudCard from '../../atomic-components/crud-card/CrudCard';
import FormModal from '../../atomic-components/form-modal/FormModal';
import TrainingPlansProvider from '../../store/TrainingPlansContext';

const Index = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <div className={styles['index-page']}>
            <TrainingPlansProvider>
                <ActionCard>{t('createPlan')}</ActionCard>
                {/* <CrudCard>Najelpszy plan</CrudCard> */}
                <FormModal title={t('newPlanTitle')} />
                <TrainingPlansList />
            </TrainingPlansProvider>
        </div>
    );
};

export default Index;
