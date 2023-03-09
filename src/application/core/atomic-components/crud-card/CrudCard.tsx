import styles from './CrudCard.module.scss';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PopOver from '../pop-over/PopOver';

const CrudCard = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [showPopover, setShowPopover] = useState(false);
    const togglePopover = (): void => setShowPopover(!showPopover);

    return (
        <div className={styles['crud-card']}>
            <span className={styles['crud-card__text']}>{children}</span>
            <span className={styles['crud-card__popover-button']} onClick={togglePopover}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </span>
            {showPopover && <PopOver />}
        </div>
    );
};

export default CrudCard;
