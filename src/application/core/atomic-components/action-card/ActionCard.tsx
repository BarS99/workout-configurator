import styles from './ActionCard.module.scss';

const ActionCard = ({ text }: { text: string }): JSX.Element => (
    <button className={styles['action-card']}>
        <span className={styles['action-card__icon']}>+</span>
        <span className={styles['action-card__text']}>{text}</span>
    </button>
);

export default ActionCard;
