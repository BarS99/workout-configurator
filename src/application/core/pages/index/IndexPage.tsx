import { useTranslation } from 'react-i18next';
import ActionCard from '../../atomic-components/action-card/ActionCard';
import CrudCard from '../../atomic-components/crud-card/CrudCard';
import FormModal from '../../atomic-components/form-modal/FormModal';

const Index = (): JSX.Element => {
    const { t } = useTranslation('common');
    return (
        <div>
            <CrudCard>Najelpszy plan</CrudCard>
            <ActionCard>{t('createPlan')}</ActionCard>

            <FormModal title={t('createPlan')} />
        </div>
    );
};

export default Index;
