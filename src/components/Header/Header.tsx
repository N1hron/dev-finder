import { ThemeSwitcher } from 'components/ThemeSwitcher';

import styles from './Header.module.scss';


export const Header = () => (
    <header className={styles.header}>
        <span className={styles.logo}>devfinder</span>
        <ThemeSwitcher/>
    </header>
);
