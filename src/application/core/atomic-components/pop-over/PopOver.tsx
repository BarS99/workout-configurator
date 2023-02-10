import styles from './PopOver.module.scss';

const PopOver = (): JSX.Element => (
    <div className={styles['pop-over']}>
        <ul>
            <a>
                <li>Edit</li>
            </a>
            <a>
                <li>Rename</li>
            </a>
            <a>
                <li>Delete</li>
            </a>
        </ul>
    </div>
);

export default PopOver;
