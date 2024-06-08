import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, ...rest }: ButtonProps) => (
    <button {...rest} className={styles.button}>
        {children}
    </button>
);
