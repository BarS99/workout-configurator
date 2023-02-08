import styles from './CrudCard.module.scss';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CrudCard = ({ children }: { children: React.ReactNode }): JSX.Element => (
    <div className={styles['crud-card']}>
        <span className={styles['crud-card__text']}>{children}</span>
        <span className={styles['crud-card__popover-button']}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </span>
    </div>
);

export default CrudCard;
