// the hook
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import ActionCard from '../../atomic-components/action-card/ActionCard';

const Index = (): JSX.Element => {
    const { t } = useTranslation('common');

    return (
        <div>
            <FontAwesomeIcon icon={faPlus} />
            {t('hello')}
            <ActionCard text={'Create a plan'} />
        </div>
    );
};

export default Index;
