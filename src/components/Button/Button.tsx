import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, ...rest }: ButtonProps) => (
    <button {...rest} className={styles.button}>
        {children}
    </button>
);
