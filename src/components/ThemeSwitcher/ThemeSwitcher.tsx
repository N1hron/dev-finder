import { useState, useEffect } from 'react';

import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';

import styles from './ThemeSwitcher.module.scss';

type Theme = 'light' | 'dark';

export const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>(setInitialTheme());

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    function setInitialTheme(): Theme {
        const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        
        return mediaQueryList.matches ? 'dark' : 'light';
    }

    function renderIcon() {
        return theme === 'dark' ? <SunIcon /> : <MoonIcon />;
    }

    function toggleTheme() {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }

    return (
        <div className={styles.themeSwitcher}>
            <button onClick={toggleTheme}>
                <span>{theme === 'light' ? 'dark' : 'light'}</span>
                {renderIcon()}
            </button>
        </div>
    );
};
