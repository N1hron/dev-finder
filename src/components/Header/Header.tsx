import { ReactNode } from 'react';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

import styles from './Header.module.scss';


export const Header = () => (
    <div className={styles.header}>
        <span className={styles.logo}>devfinder</span>
        <ThemeSwitcher/>
    </div>
);
