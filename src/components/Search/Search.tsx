import { FormEvent, MouseEvent, Dispatch } from 'react';

import { Button } from 'components/Button';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import styles from './Search.module.scss';

interface SearchProps {
    isNotFound: boolean;
    setIsNotFound: Dispatch<React.SetStateAction<boolean>>;
    onSubmit: (username: string) => void;
}

interface FormFields {
    username: HTMLInputElement;
}

export const Search = ({ isNotFound, setIsNotFound, onSubmit }: SearchProps) => {
    function handleSubmit(event: FormEvent<HTMLFormElement & FormFields>) {
        event.preventDefault();

        const username = event.currentTarget.username.value;

        if (username) {
            onSubmit(username);
            event.currentTarget.reset();
        }
    }

    function handleClick(event: MouseEvent<HTMLFormElement & FormFields>) {
        const { target } = event;

        if (
            target instanceof HTMLElement &&
            !target.hasAttribute('data-no-focus')
        ) {
            event.currentTarget.username.focus();
        }
    }

    return (
        <form
            autoComplete="off"
            className={styles.search}
            onSubmit={handleSubmit}
            onClick={handleClick}
        >
            <label htmlFor="search">
                <SearchIcon title="Search" />
            </label>
            <input
                id="search"
                type="text"
                placeholder="Search GitHub username"
                name="username"
                onChange={event => isNotFound && event.target.value && setIsNotFound(false)}
            />
            {isNotFound && (
                <p data-no-focus className={styles.errorMessage}>
                    No results
                </p>
            )}
            <Button data-no-focus>Search</Button>
        </form>
    );
};
