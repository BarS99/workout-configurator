import React from 'react';
import styles from './ActionCard.module.scss';

const ActionCard = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const createNewPlanHandler = (): void => {
        console.log('Created a new plan');
    };

    return (
        <button onClick={createNewPlanHandler} className={styles['action-card']}>
            <span className={styles['action-card__icon']}>+</span>
            <span className={styles['action-card__text']}>{children}</span>
        </button>
    );
};

export default ActionCard;
