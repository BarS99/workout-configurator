import { useTranslation } from 'react-i18next';
import ActionCard from '../../atomic-components/action-card/ActionCard';
import Button from '../../atomic-components/button/Button';
import CrudCard from '../../atomic-components/crud-card/CrudCard';

const Index = (): JSX.Element => {
    const { t } = useTranslation('common');
    return (
        <div>
            <CrudCard>Najelpszy plan</CrudCard>
            <ActionCard>{t('createPlan')}</ActionCard>
            <Button>Kochać policję</Button>
        </div>
    );
};

export default Index;
